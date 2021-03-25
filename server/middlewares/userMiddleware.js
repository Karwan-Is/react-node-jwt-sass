const jwt = require('jsonwebtoken')
const User = require('../models/Users')
const keys = require('../config/keys')

const checkUser = async (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, keys.COOKIE_AND_SESSION_KEYS.COOKIE_KEY, async (err, decodedToken) => {
            if (err) {
                res.json(null)
                next()
            } else {
                let user = await User.findById(decodedToken.id)
                res.json(user.userName)
                next()
            }
        })
    } else {
        res.json(null)
        next()
    }
}

module.exports = { checkUser }