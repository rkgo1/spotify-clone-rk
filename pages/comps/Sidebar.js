import React from 'react'
import { Box, Typography } from '@mui/material'
import { Home } from '@mui/icons-material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ViewCarouselSharpIcon from '@mui/icons-material/ViewCarouselSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
const Sidebar = () => {
    return (

        <Box sx={{ background: "#111", color: "#fff", height: "100vh" }} width={200}>
            <Box sx={{ color: "#fff" }} >
                <Box paddingTop={2}><Box component="img"
                    sx={{
                        height: 70,
                        width: 200,

                    }}
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" /></Box>
                <Box paddingTop={2} alignItems="center" ><Home fontSize='20' /><Typography variant="body1">Home</Typography></Box>
                <Box paddingTop={2} alignItems="center"><SearchSharpIcon />Search</Box>
                <Box paddingTop={2} alignItems="center"><ViewCarouselSharpIcon />Your Library</Box>
                <Box paddingTop={2} alignItems="center"><AddBoxSharpIcon />Create Playlist</Box>
                <Box paddingTop={2} alignItems="center"><FavoriteBorderSharpIcon />Liked Songs</Box>
            </Box>
        </Box >


    )
}

export default Sidebar