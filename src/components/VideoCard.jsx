import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

export const VideoCard = ({ video:{id:{videoId }, snippet}}) => {
  // console.log(videoId, snippet);
  return (
    <Card sx={{ width: { md: '320px', xs:'100%', borderRadius:'0', boxShadow: '0'}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width:'auto', height:180}}
        />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e', height:'70px'}}>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography varient="subtitle" fontWeight='bold' color='white'>
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
        </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography varient="subtitle2" fontWeight='bold' color='gray' pt='8px'>
          {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
          <CheckCircle sx={{fontSize:12, color:"gray", ml:'5px'}}/>
        </Typography>
        </Link>
      </CardContent>
      

   
    </Card>
  )
}

export default VideoCard