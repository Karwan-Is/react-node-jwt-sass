import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import searchIcon from '../images/search_icon.svg.png'


const Header = () => {
    const [isDown, setIsDown] = useState(false)
    const [searchDown, setSearchDown] = useState(false)
    const [searchData, setSearchData] = useState({})
    const [result, setResult] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isUser, setIsUser] = useState('')


    useEffect(() => {
        window.addEventListener("resize", handleWidth)
        const result = async () => {
            await fetch('/user')
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setIsUser(data)
                    }
                })
        }
        result()

        try {
            fetch('/search')
                .then(res => res.json())
                .then(data => {
                    setResult(data)
                    setIsLoading(true)
                })
                .catch(err => { console.log(err) })
        }
        catch (err) {
            console.log(err)
        }

        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [isUser, searchData])

    const dropDown = () => {
        setIsDown(!isDown)
    }

    const handleClick = () => {
        setIsDown(false)
    }

    const handleWidth = () => {
        setSearchDown(false)

        if (window.innerWidth < 720) {
            setIsDown(false)
        }
    }

    const handleSignOut = async () => {
        await fetch("/signout")
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(err => console.log(err))

        window.location.reload(false)
    }

    const handleSearching = () => {
        setSearchDown(!searchDown)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (e.target.value.length > 1) {
            setSearchData(e.target.value)
            setIsLoading(true)
        }
        else {
            setIsLoading(false)
        }
    }

    const SignedOut = (
        <>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/signin'>SignIn</Link></li>
        </>
    )

    const SignedIn = (
        <>
            <li><Link to='/' onClick={handleSignOut}>SignOut</Link></li>
            <li> <p>{isUser}</p></li>
        </>
    )

    return (
        <header>
            <div className="banner">
                <h1>Screen</h1>
            </div>

            <nav>
                <ul className="dropdown">
                    <div className="drop-btn" onClick={dropDown}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div onClick={handleClick} className={isDown ? "show-dropdown dropdown-content" : "hide-dropdown dropdown-content"}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/movies'>Movies</Link></li>
                        <li><Link to='/series'>Series</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </div>
                    <div onClick={handleClick} className={isDown ? "show-right nav-right" : "hide-right nav-right"}>
                        {isUser ? SignedIn : SignedOut}
                    </div>
                    <div className="search">
                        <div onClick={handleSearching}>
                            <img src={searchIcon} alt="Search Icon" />
                        </div>
                        {searchDown ? <input onChange={handleSearch} type="text" placeholder="Search..." /> : <></>}
                        <div className="search-wrapper">
                            {isLoading ? (result.filter(data => {
                                return (searchData.length > 1 && data.title.toLowerCase().indexOf(searchData.toLowerCase()) >= 0)
                            }).map(title => {
                                return (
                                    <div className="search-poster" key={title._id}>
                                        <img src={title.poster} alt="Search Poster" />
                                        <div className="search-title">
                                            <a href={"/details?id=" + title.id}>{title.title}</a>
                                        </div>
                                    </div>
                                )
                            })) : <></>
                            }
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header