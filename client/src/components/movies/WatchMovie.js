import React, { useState, useEffect } from 'react'

const WatchMovie = (props) => {
    const [movies, setMovies] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);

        try {
            fetch('/movies/' + props.match.params.id)
                .then(res => res.json())
                .then(data => {
                    setMovies(data)
                    setIsLoading(true)
                })
        }
        catch (err) {
            console.log(err)
        }


    }, [props.match.params.id])

    return (
        <div className="player" >
            {isLoading ? <iframe src={movies.trailer} frameBorder="0" title="Watch Online" allowFullScreen></iframe > : <h1>Loading...</h1>
            }
        </div >
    )
}

export default WatchMovie