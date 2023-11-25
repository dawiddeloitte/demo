import React from 'react'
import { InfiniteScroller } from '../components/dataHandlers/InfiniteScroller'
{/* <PostCardFigma key={p.id} post={p} /> */ }
const PostsInfinite = () => {
    return (
        <>
            <div>PostsInfinite</div>
            {InfiniteScroller()}
        </>
    )
}

export default PostsInfinite