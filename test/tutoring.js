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

  it('should log when a new session is created and save session on student',
  function (done) {
    var tutoring = TutorApp.deployed()

    var problem = 'python is hard'
    var tags = 'python'
    var timeLimit = 10

    var sessionCreatedEvent = tutoring.SessionCreated()

    sessionCreatedEvent.watch(function(error, result) {
      sessionCreatedEvent.stopWatching()
      if (error) {
        console.log('fail')
        console.log(error)
      } else {
        assert(result.args._session)
        assert.equal(accounts[0], result.args._student)
        assert.equal(problem, result.args._problem)
        assert.equal(tags, result.args._tags)
        assert.equal(timeLimit, result.args.timeLimit.valueOf())

        // make sure the session address is saved on the student
        tutoring.getStudentDetails(result.args._student).then(function (student) {
          assert.equal(student[3].valueOf(), result.args._session)
          done()
        })
      }
    })

    tutoring.createSession(problem, tags, timeLimit, { from: accounts[0] })
    .catch(done)
  })

  it('should add a tutor to the responding tutors array', function(done) {
    var tutoring = TutorApp.deployed()

    var problem = 'python is hard'
    var tags = 'python'
    var timeLimit = 10
    var bid = 10

    var sessionCreatedEvent = tutoring.SessionCreated()

    sessionCreatedEvent.watch(function(error, result) {
      sessionCreatedEvent.stopWatching()
      if (error) {
        console.log('fail')
        console.log(error)
      } else {
        tutoring.respondToHelpRequest(result.args._session, bid).then(function() {
          return tutoring.getSessionBidders(result.args._session)
        }).then(function(count) {
          assert.equal(count, 1)
          done()
        }).catch(done)
      }
    })

    tutoring.createSession(problem, tags, timeLimit, { from: accounts[0] })
    .catch(done)
  })

  it('should allow student to select a tutor', function(done) {
    var tutoring = TutorApp.deployed()

    var problem = 'python is hard'
    var tags = 'python'
    var timeLimit = 10
    var bid = 10

    var sessionCreatedEvent = tutoring.SessionCreated()

    sessionCreatedEvent.watch(function(error, result) {
      sessionCreatedEvent.stopWatching()
      var sessionAddr = result.args._session
      if (error) {
        console.log('fail')
        console.log(error)
      } else {
        tutoring.respondToHelpRequest(sessionAddr, bid, {from: accounts[1]})
        .then(function() {
          return tutoring.getSessionBidders(sessionAddr)
        }).then(function(count) {
          return tutoring.selectTutor(0, { from: accounts[0] })
        }).then(function() {
          return tutoring.getSelectedTutor(sessionAddr)
        }).then(function (tutor) {
          var addr = tutor[0].valueOf()
          var bid = tutor[1].valueOf()
          assert.equal(accounts[1], tutor[0].valueOf())
          assert.equal(bid, tutor[1].valueOf())
          done()
        }).catch(done)
      }
    })

    tutoring.createSession(problem, tags, timeLimit, { from: accounts[0] })
    .catch(done)
  })

  it('should allow for ending the instruction phase', function(done) {
    var tutoring = TutorApp.deployed()

    var problem = 'python is hard'
    var tags = 'python'
    var timeLimit = 10
    var bid = 10

    var sessionCreatedEvent = tutoring.SessionCreated()

    sessionCreatedEvent.watch(function(error, result) {
      sessionCreatedEvent.stopWatching()
      var sessionAddr = result.args._session
      if (error) {
        console.log('fail')
        console.log(error)
      } else {
        tutoring.respondToHelpRequest(sessionAddr, bid, {from: accounts[1]})
        .then(function() {
          return tutoring.getSessionBidders(sessionAddr)
        }).then(function(count) {
          return tutoring.selectTutor(0, { from: accounts[0] })
        }).then(function() {
          return tutoring.getSelectedTutor(sessionAddr)
        }).then(function (tutor) {
          return tutoring.completeInstruction(sessionAddr)
        }).then(function () {
          return tutoring.getSessionStage(sessionAddr)
        }).then(function(stage) {
          assert.equal(stage.valueOf(), 2)
          done()
        }).catch(done)
      }
    })

    tutoring.createSession(problem, tags, timeLimit, { from: accounts[0] })
    .catch(done)
  })

})
