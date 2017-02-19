'use strict'
module.exports = function (sequelize, DataTypes) {
  var Events = sequelize.define('Events', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUniqued: function (value, next) {
          Events.findAll({
            where: {
              title: value
            }
          }).then(function (data) {
            if (data.length > 0) {
              return next('Title already exist')
            }
            return next()
          })
        }
      }
    },
    date: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUniqued: function (value, next) {
          Events.findAll({
            where: {
              date: value
            }
          }).then(function (data) {
            if (data.length > 0) {
              return next('Date already exist')
            }
            return next()
          })
        }
      }
    },
    place: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    contact: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Events
}
