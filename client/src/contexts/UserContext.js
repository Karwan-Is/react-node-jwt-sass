import React, { useState, useEffect, createContext } from 'react'

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            fetch('/user')
                .then(res => res.json())
                .then(user => {
                    setUser(user)
                })
                .catch(err => { console.log(err) })
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <UserContext.Provider value={{user}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider