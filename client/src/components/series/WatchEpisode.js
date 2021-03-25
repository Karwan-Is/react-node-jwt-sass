import React, { useState, useEffect } from 'react'
const WatchEpisode = (props) => {
    const [episode, setEpisode] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);

        try {
            fetch('/series/' + props.match.params.id)
                .then(res => res.json())
                .then(data => {
                    setEpisode(data)
                    setIsLoading(true)
                })
        }
        catch (err) {
            console.log(err)
        }


    }, [props.match.params.id])

    return (
        <div className="player">
            {isLoading ? <iframe src={episode.trailer} frameBorder="0" title="Watch Online" allowFullScreen></iframe> : <h1>Loading...</h1>}
        </div>
    )
}

export default WatchEpisode