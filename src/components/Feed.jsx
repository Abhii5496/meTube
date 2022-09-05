import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fethFromAPI } from '../utils/FetchFromAPI'
import {Sidebar,Videos} from './'


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    useEffect(() => {
      fethFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err))
    },[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sm:'column', md:"row"}}}>
      <Box sx={{height:{ax:"auto", md:'92vh'}, borderRight:'1px solid white', px:{sm:'0', md:'2'}}}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'white', textAlign:'center', fontSize:"10px"}}>
          Copyright 2022 Abhii
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
      <Typography varient='h4' fontWeight='bold' mb={2} sx={{color:"white"}}>
       {selectedCategory} <span style={{color:"Red"}}>Videos</span>
      </Typography>

      <Videos videos={videos}/>

      
      </Box>
    </Stack>
  )
}

export default Feed