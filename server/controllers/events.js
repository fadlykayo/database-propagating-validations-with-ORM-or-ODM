const models = require('../models')

module.exports = {
  getEvents: (req, res) => {
    models.Events.findAll().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  getEvent: (req, res) => {
    models.Events.findById(req.params.id).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  createEvent: (req, res) => {
    if (!req.body.date) {
      res.status(200).json({message: 'Validation error: Date cannot be empty'})
    }else {
      models.Events.create({
        title: req.body.title,
        date: req.body.date,
        place: req.body.place,
        contact: req.body.contact
      }).then(function (data) {
        res.send(data)
      }).catch(function (err) {
        res.send(err)
      })
    }
  },
  deleteEvent: (req, res) => {
    models.Events.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  updateEvent: (req, res) => {
    models.Events.findById(req.params.id).then(function (event) {
      event.update({
        title: req.body.title,
        date: req.body.date,
        place: req.body.place,
        contact: req.body.contact
      }).then(function (data) {
        res.send(data)
      }).catch(function (err) {
        res.send(err)
      })
    })
  }
}
