import React from 'react'
import Layout from '../Layouts/Layout'
import { Box, Button, Typography } from '@mui/material'

const About:React.FC = () => {
  return (
    <Layout>
          <Box  sx={{
            textAlign: 'center',
            px: { xs: 2, sm: 20 },  // px: 0 on extra-small screens (mobile), 20 on small screens and up
            py: { xs: 0, sm: 20 },  // py: 0 on extra-small screens (mobile), 20 on small screens and up
            bgcolor: 'lightgray',
          }} >
          <Typography className='about_us' component={'h1'} sx={{fontSize:'2rem'}} >
            About us
          </Typography>
          <p className='about_paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum suscipit excepturi ut eius nostrum fuga, eligendi minima dicta? Odit suscipit aut magnam velit pariatur molestiae iste illum, deserunt aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum suscipit excepturi ut eius nostrum fuga, eligendi minima dicta? Odit suscipit aut magnam velit pariatur molestiae iste illum, deserunt aperiam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum suscipit excepturi ut eius nostrum fuga, eligendi minima dicta? Odit suscipit aut magnam velit pariatur molestiae iste illum, deserunt aperiam.
          </p>
          <Button variant='outlined' sx={{color:'black',my:'25px',border:'1px solid black'}}>
            See more
          </Button>
        </Box>
      {/* </Box> */}
    </Layout>
  )
}

export default About