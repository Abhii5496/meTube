import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'


const SearchBar = () => {
  return (
    <Paper
        component='form'
        onSubmit={() => {}}
        sx={{
            borderRadius:20,
            border:'1px solid blue',
            pl:2,
            boxShadow:'none',
            mr:{sm:5}
        }}
        >
       <input 
        className='search-menu'
        placeholder='Search....'
        value=''
        onChange={() => {}}
       />
       <IconButton type="submit" sx={{ p:'10px', color:'blue'}}>
        <Search/>
       </IconButton>
    </Paper>
  )
}

export default SearchBar