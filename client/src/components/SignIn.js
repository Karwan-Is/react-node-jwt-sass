import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const SignIn = () => {
    const [userInfo, setUserInfo] = useState({})
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [checkEmail, setCheckEmail] = useState('')
    const [checkPass, setCheckPass] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        setCheckEmail('')
        setCheckPass('')

        try {
            await fetch('/signin', {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.user === "succed") {
                        setIsSignedIn(true)
                        window.location.reload(false)
                    }
                    if (data.errors) {
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
        <div className="signin form">
            {isSignedIn ? <Redirect to="/" /> : (
                <div>
                    <h1>SignIn</h1>
                    <form action='/signin' method='POST'>
                        <div className="error-wrapper">
                            <input type="text" id="email" name="email" onChange={handleChange} placeholder="Enter your e-mail"></input>
                            <p>{checkEmail ? checkEmail : ''}</p>
                        </div>
                        <div className="error-wrapper">
                            <input type="password" id="password" name="password" onChange={handleChange} placeholder="Enter your password"></input>
                            <p>{checkPass ? checkPass : ''}</p>
                        </div>
                        <button type="submit" onClick={handleSubmit}>SignIn</button>
                    </form>
                </div>)
            }
        </div>
    )
}

export default SignIn