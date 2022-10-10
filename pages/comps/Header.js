import { Box, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

const Header = () => {
    return (
        <Box display={"flex"} sx={{ background: "#111", color: "#FFFFF1 ", height: '50' }}>
            <Box flexGrow={1}>
                <Button marginLeft={20} sx={{ background: "#FFF", borderRadius: '25px', height: '30px', color: "#111 " }} variant='outlined'>&lt;</Button>
                <Button sx={{ background: "#FFF", borderRadius: '25px', height: '30px', color: "#111 " }} variant='outlined'>&gt;</Button>
            </Box>

            <TextField sx={{ background: "#FFF", borderRadius: '25px', height: '30px', color: "#111 " }} variant="standard" />
            <Button variant='outlined' sx={{ background: "#FFF", borderRadius: '25px', height: '30px', color: "#111 " }} >LOGIN</Button>
        </Box>
    )
}

export default Header