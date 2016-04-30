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


}
