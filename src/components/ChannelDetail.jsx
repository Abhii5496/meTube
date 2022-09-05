
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fethFromAPI } from '../utils/FetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const {id} = useParams();

  console.log(videos);


  useEffect(()=> {
    const getResults = async () =>{
    const data = await fethFromAPI(`channels?part=snippet&id=${id} `);

     setChannelDetail(data?.items[0])

    const videoData= await fethFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    setVideos(videoData?.items)
    };

    getResults();
  },[id])
  return (
    <>
    <Box min-height="95vh">
      <Box>
        <div style={{
           background:'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
           zIndex:10,
           height:'300px'   
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2' border='none'  >
        <Box sx={{ mr:{ md:'100px',sm:'100px'}, }}>
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default ChannelDetail