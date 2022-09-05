import { Box } from '@mui/material'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed} from './components'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
        <Box sx={{background:'#000'}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id'  element={<VideoDetail />} />
                <Route path='/channel/:id'  element={<ChannelDetail />} />
                <Route path='/search/:searchTerm'  element={<SearchFeed />} />
            </Routes>
            <Footer/>
        </Box>
    </BrowserRouter>
  )
}

export default App