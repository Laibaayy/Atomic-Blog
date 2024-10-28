import React, { useContext } from 'react'
// import { PostContext } from "../App"
import { PostContext } from "./Provder";

const SearchPosts = () => {
    const { searchQuery, setSearchQuery } = useContext(PostContext)
    return (
        <div>

            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
            />
        </div>
    )
}

export default SearchPosts