const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy
const User = require('../models/Users')
const keys = require('../config/keys')

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id, done) =>{
    User.findById(id)
    .then(
        done(null,user)
    )
})

passport.use(
    new GitHubStrategy({
        clientID: keys.github.client_ID,
        clientSecret: keys.github.client_Secret,
        callbackURL: '/auth/github'
    },
    (accessToken, refreshToken, profile, done) =>{
        console.log(profile)
    })
)