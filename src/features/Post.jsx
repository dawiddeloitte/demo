import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost } from '../api';
import PostCardFigma from '../components/cards/PostCardFigma';

const Post = () => {
  const { id } = useParams();
  const nav = useNavigate()
  console.log(typeof id);
  const post = 5
  if (id <= 0) nav('/')

  const postEQuery = useQuery({
    queryKey: ['post'],
    queryFn: () => getPost(id),
  })

  if (postEQuery.isLoading) return <h1>Loading...</h1>
  if (postEQuery.isError) return <pre>{JSON.stringify(postEQuery.error)}</pre>

  console.log(postEQuery.data)
  return (
    <div className='flex flex-col'>
      <div>Post id from url: {id}</div>
      <div>extra details would be displayed for on this page: {id}</div>
    </div>
  )
}

export default Post