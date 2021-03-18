import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({})
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [checkEmail, setCheckEmail] = useState('')
    const [checkPass, setCheckPass] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        setCheckEmail('')
        setCheckPass('')

        try {
            await fetch('/signup', {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.user === 'succed') {
                        setIsSignedUp(true)
                        window.location.reload(false)
                    }
                    else {
                        setCheckEmail(data.errors.email)
                        setCheckPass(data.errors.password)
                    }
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    return (
        <div className="signup form">
            {isSignedUp ? <Redirect to="/" /> :
                (<div>
                    <h1>SignUp</h1>
                    <form onSubmit={handleSubmit} action='/signup'>
                        <input type="text" id="userName" name="userName" onChange={handleChange} placeholder="User Name" required></input>
                        <input type="text" id="firstName" name="firstName" onChange={handleChange} placeholder="First Name" required></input>
                        <input type="text" id="lastName" name="lastName" onChange={handleChange} placeholder="Last Name" required></input>
                        <div className="form-wrapper">
                            <select id="gender" name="gender" onChange={handleChange}>
                                <option>Gender</option>
                                <option value="female" >Female</option>
                                <option value="male" >Male</option>
                                <option value="others" >Others</option>
                            </select>
                            <input type="date" id="dateOfBirth" name="dateOfBirth" onChange={handleChange} required></input>
                        </div>
                        <div className="error-wrapper">
                            <input type="email" id="email" name="email" onChange={handleChange} placeholder="E-mail"></input>
                            <p>{checkEmail ? checkEmail : ''}</p>
                        </div>
                        <div className="error-wrapper">
                            <input type="password" id="password" name="password" onChange={handleChange} placeholder="Password"></input>
                            <p>{checkPass ? checkPass : ''}</p>
                        </div>
                        <button type="submit">SignUp</button>
                    </form>
                </div>)
            }
        </div>
    )
}

export default SignUp