const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 8 characters'],
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.statics.signin = async function (email, password) {
    const user = await this.findOne({ email })
    if (!email)
    throw Error('enter an email')
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (!password)
            throw Error('enter a password')

        if (auth) {
            return user
        }
        throw Error('incorrect password')

    }
    throw Error('incorrect email')
}

const User = mongoose.model('User', userSchema)

module.exports = User