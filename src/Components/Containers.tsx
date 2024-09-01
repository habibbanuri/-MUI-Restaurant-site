// import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}  />
        <AccountBoxRoundedIcon sx={{width:90}}/>
      </Container>
    </>
  );
}
