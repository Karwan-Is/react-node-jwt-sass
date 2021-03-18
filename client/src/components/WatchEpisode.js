import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const WatchEpisode = (props) => {
    const [episode, setEpisode] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isUser, setIsUser] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0);

        const result = () => {
            fetch('/user')
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setIsUser(data)
                    }
                })
        }
        result()

        fetch('/series/' + props.match.params.id)
            .then(res => res.json())
            .then(data => {
                setEpisode(data)
                setIsLoading(true)
            })

    }, [props.match.params.id, isUser])

    return (
        <>
            {isUser ? (<div className="player">
                {isLoading ? <iframe src={episode.trailer} frameBorder="0" title="Watch Online" allowFullScreen></iframe> : <h1>Loading...</h1>}
            </div>)
                : (<Redirect to="/signin" />)
            }
        </>

    )
}

export default WatchEpisode