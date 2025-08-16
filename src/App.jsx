import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      
    <Header />
    <Outlet />
    <Footer />

    </>
  )
}

export default App
