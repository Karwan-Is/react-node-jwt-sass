const router = require('express').Router()
const passport = require('passport')


router.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }));

module.exports = router