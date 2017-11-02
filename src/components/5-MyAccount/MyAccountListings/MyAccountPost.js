import React from 'react'
import '../Account.css'

const MyAccountPost = ({ post }) => {
    // const post = props.post

    return <li>

        <div className="centerCenter">
            <div className="account-post"> {post.title}  <div>x</div> </div>
        </div>

    </li>

}

export default MyAccountPost
