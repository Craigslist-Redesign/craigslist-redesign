import React from 'react'
import MyAccountPost from './MyAccountPost'

const MyAccountListings = (props) => {
    console.log(props)
    const myPosts = props.posts.map((post) => {

        return <MyAccountPost key={post.post_id} post={post} />
    })
    return (
        <ul>
            {myPosts}
        </ul>

    )
}

export default MyAccountListings