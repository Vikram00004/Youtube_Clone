import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import PlayVideo from './components/PlayVideo'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/search/:searchQuery' element={<Search />} />
      <Route path='/video/:id' element={<PlayVideo />} />
    </Routes>
    </>
  )
}

export default App
