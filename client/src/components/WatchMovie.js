import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const WatchMovie = (props) => {
    const [movie, setMovie] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isUser, setIsUser] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0);

        const result = async () => {
            await fetch('/user')
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setIsUser(data)
                    }
                })
        }
        result()


        fetch('/movie/' + props.match.params.id)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
                setIsLoading(true)
            })

    }, [props.match.params.id, isUser, movie])

    return (
        <>
            {isUser ? (<div className="player" >
                { isLoading ? <iframe src={movie.trailer} frameBorder="0" title="Watch Online" allowFullScreen></iframe > : <h1>Loading...</h1>
                }
            </div >)
                : (<Redirect to="/signin" />)
            }
        </>
    )
}

export default WatchMovie