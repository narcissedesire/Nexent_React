import { useState } from 'react'
import './index.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Services from './Component/Services'
import About from './Component/About'
import Produit from './Component/Produit'
import Blog from './Component/Blog'
import NewsLetter from './Component/NewsLetter'
import Footer from './Component/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Produit/>
      <Blog/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
