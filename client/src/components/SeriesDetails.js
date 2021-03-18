import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SeriesDetails = (props) => {
    const [series, setSeries] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);

        const result = async () => {
            await fetch('/series/' + props.match.params.id)
                .then(res => res.json())
                .then(series => {
                    setSeries(series)
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
                        <img src={series.poster} alt="Poster"></img>
                        <div className="details">
                            <div>
                                <h1 className="details-title">{series.title + ' (' + series.year + ')'}</h1>
                            </div>
                            <div className="details-genre">
                                {series.genre.map(each => {
                                    return (
                                        <p key={each}>{each}</p>
                                    )
                                })}
                            </div>
                            <h3 className="details-brif">{series.brief}</h3>
                            <span className="details-line details-top-line"></span>
                            <div className="details-wrapper">
                                <span>Stars:</span><h4>{series.stars.join(', ')}</h4>
                                <span>Running Time:</span><h4>{series.running_time}</h4>
                                <span>Language:</span><h4>{series.language}</h4>
                                <span>Rate:</span><h4>{series.rate}</h4>
                            </div>
                            <span className="details-line details-bottom-line" />
                        </div>
                    </div>
                    <Link to={"/watchepisode/" + series._id} className="watch-online">
                        <h3>WATCH ONLINE</h3>
                    </Link>
                    <div className="trailer">
                        <iframe src={series.trailer} frameBorder="0" title="Movie Trailer" allowFullScreen></iframe>
                    </div>
                </div>
            ) : (<h1>Loading...</h1>)}

        </div>
    )
}

export default SeriesDetails