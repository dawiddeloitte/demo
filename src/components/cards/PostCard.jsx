import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
        <h1>
           title: {post.title}  
        </h1>
        <span>
            body: {post.body}
        </span>
    </div>
  )
}

export default PostCard