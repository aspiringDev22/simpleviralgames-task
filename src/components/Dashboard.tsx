import { Box, Button } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <Box sx={dashboardStyles}>
        <Button variant='outlined'>
            Add Game
        </Button>
    </Box>
  )
}

const dashboardStyles = {
    height:'100vh',
    padding:"2rem 8rem"
}

export default Dashboard