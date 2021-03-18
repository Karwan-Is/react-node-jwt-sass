import React, { useState, useEffect } from 'react'
import MoviePosters from './MoviePosters'
import SeriesPosters from './SeriesPosters'

const PageNav = ({ isMovie, numOfPosters, sorted, genre }) => {
    const [firstPoster, setFirstPoster] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [numOfPages, setNumOfPages] = useState(0)

    useEffect(() => {

        fetch('/movies')
            .then(res => res.json())
            .then(data => setNumOfPages(data.length))

    }, [isMovie, currentPage, numOfPosters])

    const handlePage = (e) => {
        e.preventDefault()

        const number = e.target.innerText - 1

        if ((numOfPages % numOfPosters) > 0) {
            if ((Math.floor(numOfPages / numOfPosters)) + 1 > number) {
                setCurrentPage(number)
                setFirstPoster(numOfPosters * number)
            }
        }
        else {
            if ((Math.floor(numOfPages / numOfPosters)) > number) {
                setCurrentPage(number)
                setFirstPoster(numOfPosters * number)
            }
        }

    }

    const prevPage = (e) => {
        e.preventDefault()

        const number = currentPage - 1

        if (currentPage > 0) {
            setCurrentPage(number)
            setFirstPoster(numOfPosters * number)
        }
    }
    const nextPage = (e) => {
        e.preventDefault()

        const number = currentPage + 1
        if ((numOfPages % numOfPosters) > 0) {
            if (currentPage < (Math.floor(numOfPages / numOfPosters))) {
                setCurrentPage(number)
                setFirstPoster(numOfPosters * number)
            }
        }
        else{
            if (currentPage < (Math.floor(numOfPages / numOfPosters)) - 1) {
                setCurrentPage(number)
                setFirstPoster(numOfPosters * number)
            }
        }
    }

    return (
        <>
            {isMovie ? (
                <MoviePosters firstPoster={firstPoster} numOfPosters={numOfPosters} sorted={sorted} genre={genre} />
            ) : (
                <SeriesPosters firstPoster={firstPoster} numOfPosters={numOfPosters} sorted={sorted} genre={genre} />
            )}

            <div className="page-nav">
                <ul>
                    <li className="prev-page"><span onClick={prevPage}>&lsaquo;</span></li>
                    <li><span>...</span></li>
                    <li><span onClick={handlePage}>1</span></li>
                    <li><span onClick={handlePage}>2</span></li>
                    <li><span onClick={handlePage}>3</span></li>
                    <li><span onClick={handlePage}>4</span></li>
                    <li><span onClick={handlePage}>5</span></li>
                    <li><span>...</span></li>
                    <li className="next-page"><span onClick={nextPage}>&rsaquo;</span></li>
                </ul>
            </div>
        </>
    )
}

export default PageNav