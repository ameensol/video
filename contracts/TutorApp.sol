// This contract manages the application. That includes tracking user accounts, balances, reputation, and active video contracts.

contract TutorApp {

  struct Tutor {
    string name;
    string skills;
    uint reputation;
  }

  struct Student {
    string name;
    uint balance;
    uint reputation;
    address session;
  }

  mapping (address => Tutor) public tutors;
  mapping (address => Student) public students;

  event SessionCreated(
    address _session,
    address _student,
    string _problem,
    string _tags,
    uint timeLimit,
    uint creationTime
  );

  event TutorResponded(
    address sessionAddr,
    address indexed tutorAddr,
    uint indexed bid
  );

  event TutorSelected(address indexed tutorAddr);

  event InstructionComplete(
    address _session,
    address _student,
    address _tutor,
    uint payment
  );

  function registerStudent(string name) {
    Student student = students[msg.sender];
    student.name = name;
    student.balance += msg.value;
    student.reputation = 100;
  }

  function createSession(string problem, string tags, uint timeLimit) {
    address sessionAddress = new Session(msg.sender, problem, tags, timeLimit);
    Student student = students[msg.sender];
    student.session = sessionAddress;
    SessionCreated(
      sessionAddress,
      address(msg.sender),
      problem,
      tags,
      timeLimit,
      now
    );
  }

  function respondToHelpRequest(Session sessionAddress, uint bid) {
    sessionAddress.addRespondingTutor(msg.sender, bid);
    TutorResponded(sessionAddress, address(msg.sender), bid);
  }

  function appSelectTutor(uint index) {
    Student student = students[msg.sender];
    Session sessionAddress = Session(student.session);
    // should I also add the session to the tutor struct?
    address tutorAddr = sessionAddress.selectTutor(index);
    TutorSelected(tutorAddr);
  }

  function completeInstruction(Session sessionAddr) {
    uint payment;
    address tutorAddr;
    address studentAddr;
    (payment, tutorAddr, studentAddr) = sessionAddr.completeInstruction();
    Student student = students[studentAddr];
    student.balance -= payment;
    tutorAddr.send(payment);
    InstructionComplete(sessionAddr, studentAddr, tutorAddr, payment);
  }

  function getSessionBidders(Session sessionAddress)
    constant returns (uint)
  {
    return sessionAddress.getRespondingTutorsCount();
  }

  function getSelectedTutor(Session sessionAddress)
    constant returns (address, uint)
  {
    return sessionAddress.getSelectedTutor();
  }

  function getStudentDetails(address addr)
    constant returns (string, uint, uint, address)
  {
    Student student = students[addr];
    return (student.name, student.balance, student.reputation, student.session);
  }

  function getTutorDetails(address addr)
    constant returns (string, uint)
  {
    Tutor tutor = tutors[addr];
    return (tutor.name, tutor.reputation);
  }

  function getSessionStage(Session sessionAddr) constant returns (uint) {
    return uint(sessionAddr.stage());
  }
}

contract Session {

  // we keep contract-specific tutor data in this struct
  struct Tutor {
    address addr;
    uint bid;
  }

  address public owner;
  address public student;
  string public problem;
  string public tags;
  uint public timeLimit;
  uint public creationTime;
  Stages public stage;
  Tutor[] public respondingTutors;
  Tutor public selectedTutor;

  enum Stages {
    RequestingHelp,
    Instruction,
    Debrief
  }

  modifier onlyOwner { if (msg.sender != owner) throw; _ }

  modifier atStage(Stages _stage) { if (stage != _stage) throw; _ }

  function Session(address _student, string _problem, string _tags,
                   uint _timeLimit)
  {
    owner = msg.sender;
    student = _student;
    problem = _problem;
    tags = _tags;
    timeLimit = _timeLimit;
    creationTime = now;
    stage = Stages.RequestingHelp;
  }

  // a tutor responds to the open request for help
  function addRespondingTutor(address tutorAddr, uint bid) atStage(Stages.RequestingHelp){
    // prevent duplicates
    for (uint i=0; i < respondingTutors.length; i++) {
      if (respondingTutors[i].addr == msg.sender) throw;
    }
    respondingTutors.push(Tutor(tutorAddr, bid));
  }

  // get number of responding tutors so far
  function getRespondingTutorsCount() constant returns (uint count) {
    count = respondingTutors.length;
  }

  function getSelectedTutor() constant returns (address, uint) {
    return (selectedTutor.addr, selectedTutor.bid);
  }

  // student selects a tutor, they begin instruction
  function selectTutor(uint index)
    returns (address tutorAddr)
  {
    // no tutors have responded yet
    if (respondingTutors.length == 0) throw;
    selectedTutor = Tutor(
      respondingTutors[index].addr,
      respondingTutors[index].bid
    );
    stage = Stages.Instruction;
    return selectedTutor.addr;
  }

  function completeInstruction()
    onlyOwner atStage(Stages.Instruction) returns (uint, address, address)
  {
    stage = Stages.Debrief;
    uint payment = selectedTutor.bid * (now - creationTime);
    return (payment, student, selectedTutor.addr);
  }

  /*
  function rateTutor(uint rating) onlyOwner atStage(Stages.Debrief) {
  }

  function rateStudent(uint rating) onlyOwner atStage(Stages.Debrief) {
  }
  */
}
