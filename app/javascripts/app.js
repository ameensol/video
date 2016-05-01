var accounts;
var account;
var tutorApp;
var student = {};
var noop = function () {}

/* ROUTER */
/* Home */
function helpme() {
  document.getElementById('page1').style.display = 'none'
  document.getElementById('page2').style.display = 'block'

  var nameForm
  var nameHTML

  if (student.name) {
    nameHTML = '<h4>Hello <span id="studentName">'+student.name+'</span></h4>'+
      '<h4>You have <span id="studentBalance">'+student.balance+' </span>ether in your account</h4>'
    document.getElementById('studentNameWrapper').innerHTML = nameHTML
  } else {
    nameForm = '<div class="mdl-textfield mdl-js-textfield boxWrapper">'+
      '<h4>What is your name?</h4>'+
      '<textarea class="mdl-textfield__input textbox" type="text" rows="1" id="nameBox"></textarea></div>'+
      '<div class="mdl-textfield mdl-js-textfield boxWrapper">'+
      '<h4>How much ether would you like to start with?</h4>'+
      '<textarea class="mdl-textfield__input textbox" type="text" rows="1" id="etherBox"></textarea></div>'
    document.getElementById('studentNameWrapper').innerHTML = nameForm
  }

  console.log('helpme')
}
function ihelp() {
  console.log('ihelp')
}
/* Help us help you */
function helpIsOnTheWay() {
  tutorApp = TutorApp.deployed()

  var name, ether
  var problem = document.getElementById('problemBox').value.trim()
  var subjects = document.getElementById('subjectBox').value.trim().toLowerCase()
  var timeLimit = parseInt(document.getElementById('timeLimitBox').value.trim())
  if (!student.name) {
    name = document.getElementById('nameBox').value.trim()
    ether = parseInt(document.getElementById('etherBox').value.trim())
    tutorApp.registerStudent(name, { from: account, value: ether })
    .then(function() {
      console.log(problem, subjects, timeLimit)
      // create a contract
    })
  } else {
    console.log(problem, subjects, timeLimit)
    // create a contract
  }

  console.log('help is on the way')
}

/* Help is on the way */

/* Helper dashboard */

/* Video (Student) */

/* Video (Tutor) */

/* RENDERERS */
/* Help us help you */
function renderHUHY() {
  return
}

// modifies student global
function refreshStudentDetails(address, cb) {
  tutorApp = TutorApp.deployed()
  tutorApp.getStudentDetails(address).then(function (details) {
    student.name = details[0].valueOf()
    student.balance = details[1].valueOf()
    student.reputation = details[2].valueOf()
    cb()
  }).catch(function(err) {
    alert(err)
  })
}

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
    console.log(account)

    refreshStudentDetails(account, noop)
  });
}
