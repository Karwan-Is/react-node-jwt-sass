const jwt = require('jsonwebtoken')
const User = require('../models/Users')
const keys = require('../config/keys')

const createToken = (id) => {
  return jwt.sign({ id }, keys.session.cookieKey, {
    expiresIn: 3 * 24 * 60 * 60
  })
}

const handleErrors = (err) => {
  let errors = { email: '', password: '' }

  if (err.message === 'incorrect email') {
    errors.email = 'This email is not registered'
  }

  if (err.message === 'enter an email') {
    errors.email = 'Please enter an email'
  }

  if (err.message === 'enter a password') {
    errors.password = 'Please enter a password'
  }
 
  if (err.message === 'incorrect password') {
    errors.password = 'This password is incorrect'
  }

  if (err.code === 11000) {
    errors.email = 'That email is already registered'
    return errors
  }

  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }
  return errors
}

module.exports.signin_post = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signin(email, password)
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    res.json({ user: "succed"})
  }
  catch (err) {
    const errors = handleErrors(err)
    res.json({errors})
  }
}

module.exports.signup_post = async (req, res) => {
  const { userName, firstName, lastName, gender, dateOfBirth, email, password } = req.body

  try {
    const user = await User.create({ userName, firstName, lastName, gender, dateOfBirth, email, password })
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    res.json({ user: "succed" })
  }
  catch (err) {
    const errors = handleErrors(err)
    res.json({errors})
  }
}

module.exports.signout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.json('signout')
}