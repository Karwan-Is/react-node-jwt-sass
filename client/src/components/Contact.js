import React from 'react'

const Contact = () => {
    return (
        <div className="contact form">
            <h1>Contact Us</h1>
            <p>Email us with any questions or inquiries, We would be more than happy to answer your questions</p>
            <form className="form-wrapper">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="subject" placeholder="Subject" />
                <textarea name="message" placeholder="Message" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact