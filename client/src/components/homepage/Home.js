import React, { useState, useEffect } from 'react'
import MoviePosters from '../movies/MoviePosters'
import SlideShow from './SlideShow'
import BoxOffice from './BoxOffice'
import SeriesPosters from '../series/SeriesPosters'

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [numOfPosters, setNumOfPosters] = useState()

    useEffect(() => {

        window.addEventListener('resize', handleWidth)
        if (width > 1200) {
            setNumOfPosters(12)
        } else if (width <= 1200 && width > 1000) {
            setNumOfPosters(10);
        } else if (width <= 1000 && width > 720) {
            setNumOfPosters(9);
        } else {
            setNumOfPosters(8);
        }

        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [width])

    const handleWidth = () => {
        setWidth(window.innerWidth)
    }

    //  ********************  Line Separator  ********************  //

    const moviesLine = (
        <div className="line">
            <span />
            <h1>Movies</h1>
            <span />
        </div>
    )

    const tvSeriesLine = (
        <div className="line">
            <span />
            <h1>TV Series</h1>
            <span />
        </div>
    )

    return (
        <>
            <div className="preview">
                <SlideShow />
                <BoxOffice />
            </div>
            {moviesLine}
            <MoviePosters numOfPosters={numOfPosters} />
            {tvSeriesLine}
            <SeriesPosters numOfPosters={numOfPosters} />
        </>
    )
}

export default Home