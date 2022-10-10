import { Box, Typography, Grid } from '@mui/material'
import React from 'react'

const Main = () => {
    return (
        <Box sx={{ color: "#FFF" }} marginLeft={0}>
            <Typography variant='h5'>Uniquely Yours</Typography>
            <Box >

                <Grid>
                    <Grid item xs={2}>
                        <Box sx={{ color: "#FFF" }}>
                            4
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ color: "#FFF" }}>
                            3
                        </Box>

                    </Grid>

                    <Grid item xs={2}>
                        <Box sx={{ color: "#FFF" }}>
                            2
                        </Box>

                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant='h5'>Uniquely Yours</Typography>

            </Box>

            <Box>
                <Typography variant='h5'>Uniquely Yours</Typography>

            </Box>
            <Box>
                <Typography variant='h5'>Uniquely Yours</Typography>

            </Box>

        </Box>
    )
}

export default Main