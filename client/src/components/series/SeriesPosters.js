import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const SeriesPosters = ({ firstPoster, numOfPosters, sorted, genre }) => {
    const [seriesPosters, setSeriesPosters] = useState()
    const startingPoster = firstPoster || 0
    
    useEffect(() => {
        try {
            fetch('/series')
                .then(res => res.json())
                .then(series => {
                    setSeriesPosters(series)
                })
                .catch(err => console.log(err))
        }
        catch (err) {
            console.log(err)
        }

    }, [sorted, genre])

    return (
        <div className="posters">
            {seriesPosters ? (
                seriesPosters.slice(startingPoster, startingPoster + numOfPosters).map(series => {
                    return (
                        <Link to={"/seriesdetails/" + series._id} key={series._id}>
                            <div className="poster-wrapper">
                                <img src={series.poster} alt="Movie Poster"></img>
                                <div className="shade"></div>
                                <div className="duration">
                                    <span>{series.duration}</span>
                                </div>
                                <div className="view">
                                    <span>{series.seen}</span>
                                </div>
                                <div className="poster-extra">
                                    <h2 className="rate">{series.rate}</h2>
                                    <p className="language">{"Language: " + series.language}</p>
                                    <div className="age-rate">
                                        <h3>{series.age_rate}</h3>
                                    </div>
                                </div>
                            </div>
                            <h3 className="poster-title">{series.title}</h3>
                        </Link>
                    )
                })

            )
                : (<h1>Loading...</h1>)}

        </div>
    )

}

export default SeriesPosters