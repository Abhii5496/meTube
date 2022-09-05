import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fethFromAPI } from '../utils/FetchFromAPI'
import {Videos} from './'


const SearchFeed = () => {

    const [videos, setVideos] = useState([])
    const {searchTerm} = useParams()

    useEffect(() => {
      fethFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.log(err))
    },[searchTerm])

  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
    <Typography varient='h4' fontWeight='bold' mb={2} sx={{color:"white"}}>
     Search results for : <span style={{color:"Red"}}>{searchTerm}</span>videos
    </Typography>

    <Videos videos={videos}/>

    
    </Box>
  )
}

export default SearchFeed