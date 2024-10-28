import React from 'react'
import Posts from './Posts'
import FormAddPost from './FormAddPost'
const Main = () => {

    return (
        <div>
            <main>
                <FormAddPost />
                <Posts />
            </main>
        </div>
    )
}

export default Main