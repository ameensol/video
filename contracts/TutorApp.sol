// This contract manages the application. That includes tracking user accounts, balances, reputation, and active video contracts.

contract TutorApp {

  struct Tutor {
    string name;
    string[] skills;
    uint reputation;
  }

  struct Student {
    string name;
    uint balance;
    uint reputation;
  }

  mapping (address => Tutor) public tutors;
  mapping (address => Student) public students;

  function registerStudent(string name) {
    Student student = students[msg.sender];
    student.name = name;
    student.balance += msg.value;
    student.reputation = 0;
  }

  function addBalance() {
    Student student = students[msg.sender];
    student.balance += msg.value;
  }

  function getStudentDetails(address addr) constant returns (string, uint, uint) {
    Student student = students[addr];
    return (student.name, student.balance, student.reputation);
  }
}
