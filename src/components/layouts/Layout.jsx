import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = (component) => {
  return (
      <div className='flex flex-col h-screen w-screen'>
        <Header />
        <main className='flex flex-1 content-center mx-auto items-center justify-center'>
          {component}
        </main>
        <Footer />
      </div>
  )
}

export default Layout