'use strict'
module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Username is empty'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username can not be an empty string'
        },
        isUniqued: function (value, next) {
          Users.findAll({
            where: {
              username: value
            }
          }).then(function (data) {
            if (data.length > 0) {
              return next('Username already exist')
            }
            return next()
          })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Password is empty'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password can not be an empty string'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Email is empty'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format incorrect'
        },
        isUniqued: function (value, next) {
          Users.findAll({
            where: {
              email: value
            }
          }).then(function (data) {
            if (data.length > 0) {
              return next('Email already exist')
            }
            return next()
          })
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
  return Users
}
