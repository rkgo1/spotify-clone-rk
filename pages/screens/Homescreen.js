import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../comps/Header'
import Main from '../comps/Main'
import Sidebar from '../comps/sidebar'

const Homescreen = () => {
    return (
        <Box sx={{ background: "#191414" }}>

            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={6}>
                    <Sidebar />
                </Grid>
                <Grid item xs={4}>
                    <Main />
                </Grid>

            </Grid>


        </Box>
    )
}

export default Homescreen