import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sm:'column', md:"row"}}}>
      <Box sx={{height:{ax:"auto", md:'92vh'}, borderRight:'1px solid white', px:{sm:'0', md:'2'}}}>
        <Sidebar/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'white'}}>
          Copyright 2022 Abhii
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
      <Typography varient='h4' fontWeight='bold' mb={2} sx={{color:"white"}}>
       New <span style={{color:"Red"}}>Videos</span>
      </Typography>
      </Box>
    </Stack>
  )
}

export default Feed