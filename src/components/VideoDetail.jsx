import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect , useState} from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fethFromAPI } from '../utils/FetchFromAPI'
import Videos from './Videos'

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  const {id} = useParams();
  useEffect ( () => {
    fethFromAPI(`videos?part=snippet, statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    fethFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  },[id])

  if(!videoDetail?.snippet) return 'Loading...';

  const {snippet : { title, channelId, channelTitle}, statistics:{ viewCount, likeCount} } = videoDetail;

  console.log(likeCount);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{ width:'100%', position:'sticky', top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player' controls/>
              <Typography color='white' varient='h5' fontWeight='bold' p={2} >
               {title}
              </Typography>
              <Stack direction='row' justifyContent='space-between' sx={{ color:'white'}} py={1} px={2}>

              <Link to={`/channel/${channelId}`}>
                <Typography varient= {{ sm:'subtitle1', md:'h6'}} color='white'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize:'12px', color:'gray', ml:'5px'}}/>
                </Typography>
              </Link>

              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography varient='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography varient='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
                
              </Stack>

              </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md:1, xs:5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column' />
      </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetail