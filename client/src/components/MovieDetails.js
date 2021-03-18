import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MovieDetails = (props) => {
    const [movie, setMovie] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);

        const result = async () => {
            await fetch('/movie/' + props.match.params.id)
                .then(res => res.json())
                .then(movies => {
                    setMovie(movies)
                    setIsLoading(true)
                })
        }
        result()
    }, [props.match.params.id])

    return (
        <div>
            {isLoading ? (
                <div>
                    <div className="movie-details">
                        <img src={movie.poster} alt="Poster"></img>
                        <div className="details">
                            <div>
                                <h1 className="details-title">{movie.title + ' (' + movie.year + ')'}</h1>
                            </div>
                            <div className="details-genre">
                                {movie.genre.map(each => {
                                    return (
                                        <p key={each}>{each}</p>
                                    )
                                })}
                            </div>
                            <h3 className="details-brif">{movie.brief}</h3>
                            <span className="details-line details-top-line"></span>
                            <div className="details-wrapper">
                                <span>Stars:</span><h4>{movie.stars.join(', ')}</h4>
                                <span>Director:</span><h4>{movie.director.join(', ')}</h4>
                                <span>Duration:</span><h4>{movie.duration}</h4>
                                <span>Language:</span><h4>{movie.language}</h4>
                                <span>Seen:</span><h4>{movie.seen}</h4>
                                <span>Rate:</span><h4>{movie.rate}</h4>
                            </div>
                            <span className="details-line details-bottom-line" />
                        </div>
                    </div>
                    <Link to={"/watchmovie/" + movie._id} className="watch-online">
                        <h3>WATCH ONLINE</h3>
                    </Link>
                    <div className="trailer">
                        <iframe src={movie.trailer} frameBorder="0" title="Movie Trailer" allowFullScreen></iframe>
                    </div>
                </div>
            ) : (<h1>Loading...</h1>)}

        </div>
    )
}

export default MovieDetails