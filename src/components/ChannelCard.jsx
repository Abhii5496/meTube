// import { Box, CardContent, CardMedia, Typography } from '@mui/material'
// import { CheckCircle } from '@mui/icons-material'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { demoProfilePicture } from '../utils/constants'


//  const ChannelCard = ({ channelDetail }) => {

//   return (
//     <Box sx={{ boxShadow:'none', borderRadius:'20px'
//      ,display:'flex', justifyContent:'center', alignItems:'center',
//     widows:{ xs:'356px' ,md:'320px'},
//     height:'320px',
//     margin:'auto'
//     }}>

//     <Link to={`/channel/${channelDetail?.id?.channelId}`}></Link>
//       <CardContent sx={{ display:'flex', flexDirection:'column' ,justifyContent:'center',alignItems:'center',textAlign:'center', p:'68px',color:'white'}}>
//         <CardMedia
//           image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
      
//           alt={channelDetail?.snippet?.title}
//           sx={{borderRadius:'50%', height:'180px', width:'180px' ,mb:'2' , border:'1px solid red'}}
//         />
//         <Typography varient='h6'>
//           {channelDetail?.snippet?.title}
//           <CheckCircle sx={{fontSize:15, color:"gray",pt:'5px', ml:'5px'}}/>
//         </Typography>
//         {channelDetail?.statistics?.subscriberCount && (
//           <Typography>
//             {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}Subscribers
//           </Typography>
//         )}
//       </CardContent>
    
//     </Box>
//   )
// }

// export default ChannelCard


import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;