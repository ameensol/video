var accounts;
var account1;
var account2;
var tutor;
var tutorApp;
var student = {};
var noop = function () {}
var page = 1

// keeping this here to mock
var sessionAddr;

/* ROUTER */
/* Home */
function helpme() {
  page = 2
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
  page = 4
  document.getElementById('page1').style.display = 'none'
  document.getElementById('page4').style.display = 'block'

  console.log('ihelp')
}
/* Help us help you */
function helpIsOnTheWay() {
  tutorApp = TutorApp.deployed()

  var name, ether
  var problem = document.getElementById('problemBox').value.trim()
  var tags = document.getElementById('subjectBox').value.trim().toLowerCase()
  var timeLimit = parseInt(document.getElementById('timeLimitBox').value.trim())
  if (!student.name) {
    name = document.getElementById('nameBox').value.trim()
    ether = parseInt(document.getElementById('etherBox').value.trim())
    tutorApp.registerStudent(name, { from: account1, value: ether })
    .then(function() {
      tutorApp.createSession(problem, tags, timeLimit, { from: account1 })
      .then(function () {
        studentDashboard()
      })
    })
  } else {
    tutorApp.createSession(problem, tags, timeLimit, { from: account1 })
    .then(function () {
      studentDashboard()
    })
  }

  console.log('help is on the way')
}

function studentDashboard() {
  page = 3
  document.getElementById('page2').style.display = 'none'
  document.getElementById('page3').style.display = 'block'
}

function addResponse(tutorObj) {
  var helperList = document.getElementById('helperResponseList')
  var placeholder = document.getElementById('helpResponsePlaceholder')
  if (placeholder) { helperList.innerHTML = '' }
  helperList.innerHTML = renderResponse(tutorObj) + helperList.innerHTML
}

var responses = 0

function navPage5() {
  document.getElementById('page3').style.display = 'none'
  document.getElementById('page5').style.display = 'block'
}

function navPage6() {
  document.getElementById('page5').style.display = 'none'
  document.getElementById('page6').style.display = 'block'
}



function renderResponse(tutor) {
  console.log(tutor)
  responses += 1
  var rate = tutor.rate || 60
  var reputation = tutor.reputation || 1000
  return `
  <li class="mdl-list__item">
    <div class='helpResponse'>
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title" onclick="navPage5()">
          <h2 class="mdl-card__title-text">Chuck Norris</h2>
          <p class='reputation'>Reputation: 100</p>
          <p class='rate'>Rate: $1000/h</p>
        </div>
        <div class="mdl-card__supporting-text">
          Hi I'm Chuck Norris. Whatever your problem is, you can rest assured that I will personally take on the challenge.
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a onClick="acceptHelp(${responses - 1}, ${tutor.sessionAddr})" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Start Video Chat
          </a>
        </div>
      </div>
    </div>
  </li>
  `
}



/* Help is on the way */

/* Helper dashboard */
function addHelpRequest(event, studentData) {
  var helperList = document.getElementById('helperList')
  var placeholder = document.getElementById('helpRequestPlaceholder')
  if (placeholder) { helperList.innerHTML = '' }
  helperList.innerHTML = renderHelpRequest(event, studentData) + helperList.innerHTML
}

function renderHelpRequest(event, creator) {
  var problem = event.args._problem
  var tags = event.args._tags
  var session = event.args._session
  // var created = new Date(parseInt(event.args.creationTime.valueOf() * 1000))
  // var expires = new Date(new Date() - created).getTime() / 1000 / 60
  return `
  <li class="mdl-list__item">
    <div class='helpResponse'>
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--5-col">
              <h2 class="mdl-card__title-text studentName">${creator.name}</h2>
              <p class='reputation'>Reputation: ${creator.reputation}</p>
              <p class='created'>Created ${5}m ago</p>
              <p class='expires'>Expires in ${5}m </p>
            </div>
            <div class="mdl-cell mdl-cell--7-col">
              <p class='problemStatement'>${problem}</p>
            </div>
          </div>
        </div>
        <div class="mdl-card__supporting-text">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--9-col">
              <div class="mdl-textfield mdl-js-textfield boxWrapper">
                <textarea class="mdl-textfield__input textbox helperMessage" type="text" rows="2" placeholder="Explain briefly how you plan to approach the problem."></textarea>
                </div>
            </div>
            <div class="mdl-cell mdl-cell--3-col">
              <div class="mdl-textfield mdl-js-textfield boxWrapper">
                <textarea class="mdl-textfield__input textbox helperMessage" type="text" rows="2" placeholder="Rate ($/h)"></textarea>
                </div>
            </div>
          </div>
        </div>
        <div class="mdl-card__actions mdl-card--border center">
          <a onClick="offerHelp(${session})" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Offer Help
          </a>
        </div>
      </div>
    </div>
  </li>
  `
}

function offerHelp(sessionAddress) {
  // TODO fake bid
  // TODO show user that it worked?
  var bid = 60
  tutorApp.respondToHelpRequest(sessionAddress, bid, { from: accounts[1] })
  .catch(function(err) {
    alert(err)
  })
}

function acceptHelp(index, sessionAddr) {
  console.log('accept help')
  console.log(index)
  tutorApp = TutorApp.deployed()
  tutorApp.appSelectTutor(index, { from: accounts[0] }).then(function () {
    console.log('tutor selected')
    return tutorApp.getSelectedTutor(sessionAddr)
    // engage video chat on this end
    // also engage on other end via event listener?
  }).then(function (selectedTutor) {
    console.log('selectedTutor')
    console.log(selectedTutor)
  })
}

/* Video (Student) */

/* Video (Tutor) */

// modifies student object passed in
function getStudentDetails(address, cb) {
  var student = {}
  tutorApp = TutorApp.deployed()
  tutorApp.getStudentDetails(address).then(function (details) {
    student.name = details[0].valueOf()
    student.balance = details[1].valueOf()
    student.reputation = details[2].valueOf()
    cb(student)
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
    account1 = accounts[0];
    account2 = accounts[1]

    tutorApp = TutorApp.deployed()

    // evente
    var sessionCreated = tutorApp.SessionCreated()
    var tutorResponded = tutorApp.TutorResponded()
    var tutorSelected = tutorApp.TutorSelected()

    // watchers

    sessionCreated.watch(once(function(event) {
      if (page == 4) {

        var creator = event.args._student

        getStudentDetails(creator, function(details) {
          addHelpRequest(event, details)
        })
      }
    }))

    tutorResponded.watch(once(function (event) {
      if (page == 3) {
        var tutorObj = {}
        tutorObj.bid = event.args.bid.valueOf()
        tutorObj.sessionAddr = event.args.sessionAddr
        tutorObj.tutorAddr = event.args.tutorAddr

        tutorApp.getTutorDetails(tutorObj.tutorAddr).then(function(details) {
          tutorObj.name = details[0]
          tutorObj.reputation = details[1].valueOf()
          console.log('add response')
          console.log(tutorObj)
          addResponse(tutorObj)
        })
      }
    }))

    // only run function f once per event
    function once(f) {
      var store = {}
      return function(error, event) {
        if (error) {
          console.log(error)
        } else {
          if (!store[event.transactionHash]) {
            store[event.transactionHash] = event
            f(event)
          }
        }
      }
    }

    getStudentDetails(account1, function(data) {
      student = data
    })
  });
}
