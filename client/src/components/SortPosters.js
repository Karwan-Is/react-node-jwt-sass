import React, { useState } from 'react'
import NavigatePages from './NavigatePages'

const SortPosters = ({ isMovie ,numOfPosters }) => {
    const [sorted, setSorted] = useState(null)
    const [genre, setGenre] = useState(null)

    const handleSort = (e) => {
        e.preventDefault()
        setSorted(e.target.value)
    }

    const handleSelect = (e) => {
        e.preventDefault()
        setGenre(e.target.value)
    }

    return (
        <>
            <div className="line sort-line">
                <span />
                <div>
                    <form>
                        <select id="sort" name="sort" onChange={handleSort}>
                            <option value="">Sort</option>
                            <option value="newest">Newest</option>
                            <option value="seen">Most Viewed</option>
                            <option value="rate">Rate</option>
                            <option value="title">A - Z</option>
                            <option value="reverse">Z - A</option>
                        </select>
                    </form>
                    <form>
                        <select id="select" onChange={handleSelect}>
                            <option value="">Genres</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Animation">Animation</option>
                            <option value="Biography">Biography</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Crime">Crime</option>
                            <option value="Documentary">Documentary</option>
                            <option value="Drama">Drama</option>
                            <option value="Family">Family</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="History">History</option>
                            <option value="Horror">Horror</option>
                            <option value="Musical">Musical</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Psychological">Psychological</option>
                            <option value="Romance">Romance</option>
                            <option value="Si-Fi">Si-Fi</option>
                            <option value="Short Film">Short Film</option>
                            <option value="Sitcom">Sitcom</option>
                            <option value="Sport">Sport</option>
                            <option value="Superhero">Superhero</option>
                            <option value="Thriller">Thriller</option>
                            <option value="TV Show">TV Show</option>
                            <option value="War">War</option>
                        </select>
                    </form>
                </div>
                <span />
            </div>
            <NavigatePages isMovie={isMovie} numOfPosters={numOfPosters} sorted={sorted} genre={genre} />
        </>
    )
}

export default SortPosters