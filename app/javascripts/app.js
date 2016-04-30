var accounts;
var account;
var student;

/* ROUTER */
/* Home */
function helpme() {
  document.getElementById('page1').style.display = 'none'
  document.getElementById('page2').style.display = 'block'

  // TODO If student.name is not present, display a form for the name.

  document.getElementById('studentName').innerHTML = 'Ameen'
  console.log('helpme')
}
function ihelp() {
  console.log('ihelp')
}
/* Help me */

/* Help us help you */

/* Help is on the way */

/* Helper dashboard */

/* Video (Student) */

/* Video (Tutor) */

/* RENDERERS */
/* Help us help you */
function renderHUHY() {
  return
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

    // TODO get student details, save in *student* global
  });
}
