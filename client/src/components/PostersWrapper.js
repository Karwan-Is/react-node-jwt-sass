import React, { useState, useEffect } from 'react'
import SortPosters from './SortPosters'

const PostersWrapper = ({isMovie}) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [numOfPosters, setNumOfPosters] = useState()

    useEffect(() => {

        const handleWidth = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidth)

        if (width > 1200) {
            setNumOfPosters(24)
        } else if (width <= 1200 && width > 1000) {
            setNumOfPosters(20);
        } else if (width <= 1000 && width > 720) {
            setNumOfPosters(18);
        } else {
            setNumOfPosters(16);
        }

        return () => {
            window.removeEventListener('resize', handleWidth)
        }

    }, [width, numOfPosters])

    return (
        <div>
            <SortPosters  isMovie={isMovie}  numOfPosters={numOfPosters} />
        </div>
    )
}

export default PostersWrapper