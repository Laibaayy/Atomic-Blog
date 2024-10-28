import React, { useContext } from 'react'
import Results from './Results'
import SearchPosts from './SearchPosts'

// import { PostContext } from "../App"
import { PostContext } from "./Provder";


const Header = () => {
    const { onClearPosts } = useContext(PostContext)
    return (
        <div> <header>
            <h1>
                <span>⚛️</span>The Atomic Blog
            </h1>
            <div>
                <Results />
                <SearchPosts />
                <button onClick={onClearPosts}>Clear posts</button>
            </div>
        </header></div>
    )
}

export default Header