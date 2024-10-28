import React, { useContext } from 'react'
// import { PostContext } from "../App"
import { PostContext } from "./Provder";

const List = () => {
    const { posts } = useContext(PostContext)
    return (
        <div>
            <ul>
                {posts.map((post, i) => (
                    <li key={i}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List