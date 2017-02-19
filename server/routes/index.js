var express = require('express')
var router = express.Router()
const userController = require('../controllers/users')
const eventController = require('../controllers/events')

/* GET home page. */

router.get('/', function (req, res, next) {
  res.send('Go to http://localhost:8080/')
})

// Users

router.get('/auth', function (req, res, next) {
  res.send({
    endpoints: [
      '/auth/users/register',
      '/auth/users/login',
      '/auth/users',
      '/auth/users/:id'
    ]
  })
})

router.post('/auth/users/register', userController.createUser)

router.post('/auth/users/login', userController.verifyUser)

router.get('/auth/users', userController.getUsers)

router.put('/auth/users/:id', userController.updateUser)

router.delete('/auth/users/:id', userController.deleteUser)

router.get('/api', function (req, res, next) {
  res.send({
    endpoints: [
      '/api/events',
      '/api/events/:id'
    ]
  })
})

// Events

router.get('/api/events', eventController.getEvents)

router.get('/api/events/:id', eventController.getEvent)

router.post('/api/events', eventController.createEvent)

router.put('/api/events/:id', eventController.updateEvent)

router.delete('/api/events/:id', eventController.deleteEvent)

module.exports = router
