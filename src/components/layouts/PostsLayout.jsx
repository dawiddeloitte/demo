import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostsLayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/posts'>Go To Posts</Link>
                    </li>
                    <li>
                        <Link to='/'>Go To Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default PostsLayout