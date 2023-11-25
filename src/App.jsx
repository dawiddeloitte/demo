import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Posts from './features/Posts'
import NotFound from './features/NotFound'
import Post from './features/Post'
import PostsLayout from './components/layouts/PostsLayout'
import Header from './components/layouts/Header'
import Layout from './components/layouts/Layout'
import * as Features from './features/Index'


function App() {
  return (
    <Routes>
      <Route path="/" element={Layout(<Features.Home />)} />
      <Route path="/users" element={Layout(<Features.User />)} />
      <Route path='/posts'>
        <Route index element={Layout(<Posts />)} />
        <Route path=":id" element={Layout(<Post />)} />
        <Route path="infinite" element={<Features.PostsInfinite />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
