import React, { useState, useEffect } from 'react'

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideShow, setSlideShow] = useState()

    useEffect(() => {

        try {
            fetch('/movies')
                .then(res => res.json())
                .then(data => setSlideShow(data.map(slide => {
                    return slide.land_poster
                })))
                .catch(err => console.log(err))
        }
        catch (err) {
            console.log(err)
        }

        const timer = setInterval(() => {
            if (currentSlide === 4) {
                setCurrentSlide(0)
            } else {
                setCurrentSlide(currentSlide + 1)
            }
        }, 5000);
        return () => {
            clearInterval(timer);
        }
    }, [currentSlide])

    const nextSlide = () => {
        if (currentSlide === 4) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(4)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }



    return (
        <div className="slide-show">{slideShow ? (
            <div className="slide-show-wrapper">
                <img src={slideShow[currentSlide]} alt="Slides" />
                <span className="next-slide" onClick={nextSlide}>&rsaquo;</span>
                <span className="prev-slide" onClick={prevSlide}>&lsaquo;</span>
            </div>
        ) :
            <h1>Loading...</h1>}
        </div>

    )
}

export default SlideShow