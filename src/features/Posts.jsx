import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../api'
import PostCardFigma from '../components/cards/PostCardFigma'

const Posts = () => {
    const postQuery = useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts(),
    })

    if (postQuery.isLoading) return <h1>Loading...</h1>
    if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>
    console.log(postQuery.data)
    
    const displayPosts = () => (
        postQuery.data.map(p =>
        (
                <PostCardFigma key={p.id} post={p} />
        )
        )
    )
    return (
            <div className='flex justify-center flex-wrap'>
                {displayPosts()}

            </div>
    )
}

export default Posts