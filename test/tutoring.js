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

  it('should log when a new session is created',
  function (done) {
    var tutoring = TutorApp.deployed()

    var problem = 'python is hard'
    var tags = 'python'
    var timeLimit = 10

    var sessionCreatedEvent = tutoring.SessionCreated()

    sessionCreatedEvent.watch(function(error, result) {
      if (error) {
        console.log('fail')
        console.log(error)
      } else {
        assert(result.args._session)
        assert.equal(accounts[0], result.args._student)
        assert.equal(problem, result.args._problem)
        assert.equal(tags, result.args._tags)
        assert.equal(timeLimit, result.args.timeLimit.valueOf())
        sessionCreatedEvent.stopWatching()
        done()
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

})
