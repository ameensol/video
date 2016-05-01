contract('TutorApp', function(accounts) {

  it('should register a student', function(done) {
    var tutoring = TutorApp.deployed()

    tutoring.registerStudent('fred', { from: accounts[0], value: 10000 })
    .then(function() {
      return tutoring.getStudentDetails.call(accounts[0])
    }).then(function(student) {
      assert.equal(student[0].valueOf(), 'fred')
      assert.equal(student[1].valueOf(), 10000)
      assert.equal(student[2].valueOf(), 0)
      done()
    }).catch(done)
  })
})
