import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const MoviesPosters = ({ firstPoster, numOfPosters, sorted, genre }) => {
    const [moviePosters, setMoviePosters] = useState()
    const startingPoster = firstPoster || 0

    useEffect(() => {
        try {
            fetch('/movies', {
                method: 'POST',
                body: JSON.stringify({ sorted, genre }),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(movies => {
                    setMoviePosters(movies)
                })
                .catch(err => { console.log(err) })
        }
        catch (err) {
            console.log(err)
        }

    }, [sorted, genre])

    return (
        <div className="posters">
            {moviePosters ? (
                moviePosters.slice(startingPoster, startingPoster + numOfPosters).map(movies => {
                    return (
                        <Link to={"/moviedetails/" + movies._id} key={movies._id}>
                            <div className="poster-wrapper">
                                <img src={movies.poster} alt="Movie Poster"></img>
                                <div className="shade"></div>
                                <div className="duration">
                                    <span>{movies.duration}</span>
                                </div>
                                <div className="view">
                                    <span>{movies.seen}</span>
                                </div>
                                <div className="poster-extra">
                                    <h2 className="rate">{movies.rate}</h2>
                                    <p className="language">{"Language: " + movies.language}</p>
                                    <div className="age-rate">
                                        <h3>{movies.age_rate}</h3>
                                    </div>
                                </div>
                            </div>
                            <h3 className="poster-title">{movies.title}</h3>
                        </Link>
                    )
                })

            )
                : (<h1>Loading...</h1>)}

        </div>
    )

}

export default MoviesPosters