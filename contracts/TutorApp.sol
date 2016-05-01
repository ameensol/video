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
    address indexed sessionAddr,
    address indexed tutorAddr,
    uint indexed bid
  );

  event TutorSelected(address indexed tutorAddr);

  function registerStudent(string name) {
    Student student = students[msg.sender];
    student.name = name;
    student.balance += msg.value;
    student.reputation = 0;
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

  function getSessionBidders(Session sessionAddress)
    constant returns (uint count)
  {
    count = sessionAddress.getRespondingTutorsCount();
  }

  function getStudentDetails(address addr) constant returns (string, uint, uint) {
    Student student = students[addr];
    return (student.name, student.balance, student.reputation);
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

  modifier onlyOwner { if (msg.sender != student) throw; _ }

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
    respondingTutors.push(Tutor(msg.sender, bid));
  }

  // get number of responding tutors so far
  function getRespondingTutorsCount() constant returns (uint count) {
    count = respondingTutors.length;
  }

  // student selects a tutor, they enter the grace period
  function selectTutor(uint index) onlyOwner atStage(Stages.RequestingHelp) {
    selectedTutor = respondingTutors[index];
    stage = Stages.Instruction;
  }

  function completeInstruction() onlyOwner atStage(Stages.Instruction) {
    stage = Stages.Debrief;
  }

  /*
  function rateTutor(uint rating) onlyOwner atStage(Stages.Debrief) {}
  function rateStudent(uint rating) onlyOwner atStage(Stages.Debrief) {}
  */
}
