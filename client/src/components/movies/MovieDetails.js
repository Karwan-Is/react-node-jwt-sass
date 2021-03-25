import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const MovieDetails = (props) => {
    const [movies, setMovies] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const { user } = useContext(UserContext)

    useEffect(() => {
        window.scrollTo(0, 0);

        try {
            fetch('/movies/' + props.match.params.id)
                .then(res => res.json())
                .then(movies => {
                    setMovies(movies)
                    setIsLoading(true)
                })
        }
        catch (err) {
            console.log(err)
        }


    }, [props.match.params.id, user])

    return (
        <div>
            {isLoading ? (
                <div>
                    <div className="movie-details">
                        <img src={movies.poster} alt="Poster"></img>
                        <div className="details">
                            <div>
                                <h1 className="details-title">{movies.title + ' (' + movies.year + ')'}</h1>
                            </div>
                            <div className="details-genre">
                                {movies.genre.map(each => {
                                    return (
                                        <p key={each}>{each}</p>
                                    )
                                })}
                            </div>
                            <h3 className="details-brif">{movies.brief}</h3>
                            <span className="details-line details-top-line"></span>
                            <div className="details-wrapper">
                                <span>Stars:</span><h4>{movies.stars.join(', ')}</h4>
                                <span>Director:</span><h4>{movies.director.join(', ')}</h4>
                                <span>Duration:</span><h4>{movies.duration}</h4>
                                <span>Language:</span><h4>{movies.language}</h4>
                                <span>Seen:</span><h4>{movies.seen}</h4>
                                <span>Rate:</span><h4>{movies.rate}</h4>
                            </div>
                            <span className="details-line details-bottom-line" />
                        </div>
                    </div>
                    {user ? (
                        <Link to={"/watchmovie/" + movies._id} className="watch-online">
                            <h3>WATCH ONLINE</h3>
                        </Link>
                    ) : (
                        <Link to="/signin" className="watch-online"><h3>WATCH ONLINE</h3></Link>
                    )}

                    <div className="trailer">
                        <iframe src={movies.trailer} frameBorder="0" title="Movie Trailer" allowFullScreen></iframe>
                    </div>
                </div>
            ) : (<h1>Loading...</h1>)}

        </div>
    )
}

export default MovieDetails