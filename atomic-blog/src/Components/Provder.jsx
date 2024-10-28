import React, { createContext, useMemo, useState } from 'react'
import { faker } from "@faker-js/faker";

const PostContext = createContext();
const Provder = ({ children }) => {
    const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
    );
    function createRandomPost() {
        return {
            title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
            body: faker.hacker.phrase(),
        };
    }
    const [searchQuery, setSearchQuery] = useState("");


    // Derived state. These are the posts that will actually be displayed
    const searchedPosts =
        searchQuery.length > 0
            ? posts.filter((post) =>
                `${post.title} ${post.body}`
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            )
            : posts;

    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    function handleClearPosts() {
        setPosts([]);
    }


    const value = useMemo(() => {
        return {
            posts: searchedPosts,
            onClearPosts: handleClearPosts,
            searchQuery: searchQuery,
            setSearchQuery: setSearchQuery,
            onAddPost: handleAddPost,
            createRandomPost,
        };
    }, [searchQuery, searchedPosts])


    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}

// const UseCustomContext = () => {
//     const custom = useContext(PostContext)
//     if (custom === undefined) throw new Error('We have use it outside of provider')
//     return custom;
// }
export { Provder, PostContext }