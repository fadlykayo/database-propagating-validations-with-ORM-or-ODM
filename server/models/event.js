'use strict'
module.exports = function (sequelize, DataTypes) {
  var Events = sequelize.define('Events', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Title is empty'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title can not be an empty string'
        },
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
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: 'Date is empty'
      },
      validate: {
        isDate: {
          args: true,
          msg: 'Date can not be empty'
        },
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
      allowNull: {
        args: false,
        msg: 'Place is empty'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Place can not be an empty string'
        }
      }
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Contact is empty'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Contact can not be an empty string'
        }
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
