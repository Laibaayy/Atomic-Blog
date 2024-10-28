import React from 'react'

// import { PostContext } from "../App"
import { PostContext } from "./Provder";
import { useContext } from 'react';

const Results = () => {
    const { posts } = useContext(PostContext)
    return (
        <div>
            <p>🚀 {posts.length} atomic posts found</p>;
        </div>
    )
}

export default Results