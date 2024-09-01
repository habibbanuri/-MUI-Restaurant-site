import React, { useState } from 'react';
import Layout from '../Layouts/Layout';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

// import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import contact from '../../public/contact.jpg';

const Contact: React.FC = () => {
  const [italic, setItalic] = useState<boolean>(false);
  const [fontWeight, setFontWeight] = useState<string>('normal');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFontWeightChange = (weight: string) => {
    setFontWeight(weight);
    handleMenuClose();
  };

  return (
    <Layout>
      <Grid sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'start', my: '40px',flexDirection:{
        xs:'column',sm:'column',md:'row'
      } }}>
        <Box>
          <img className='contact_img' src={contact} alt="Contact" />
        </Box>
        <Box>
          <Typography style={{ fontSize: '30px', fontWeight: '400',marginBottom:'30px' }}>Contact us</Typography>
          <Box sx={{ width: 500, maxWidth: '50%' }}>
            <TextField 
              name="name" 
              fullWidth 
              label="Name"
              type="text" 
              id="nameField" 
            /><br/><br/>
            <TextField 
              name="email" 
              fullWidth 
              label="Email"
              type="email" 
              id="emailField" 
            /><br/><br/><br/>
            <TextField 
              name="Phone" 
              fullWidth 
              label="Phone"
              type="number" 
              id="emailField" 
            /><br/><br/>
            <FormControl>
              <FormLabel>Your Message</FormLabel>
              <Textarea
                placeholder="Type your Message..."
                minRows={3}
                endDecorator={
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 'var(--Textarea-paddingBlock)',
                      pt: 'var(--Textarea-paddingBlock)',
                      borderTop: '1px solid',
                      borderColor: 'divider',
                      flex: 'auto',
                    }}
                  >
                    <IconButton
                      variant="plain"
                      color="neutral"
                      onClick={handleMenuClick}
                    >
                      <FormatBold />
                      <KeyboardArrowDown  />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      size="sm"
                      placement="bottom-start"
                      sx={{ '--ListItemDecorator-size': '24px' }}
                    >
                      {['200', 'normal', 'bold'].map((weight) => (
                        <MenuItem
                          key={weight}
                          selected={fontWeight === weight}
                          onClick={() => handleFontWeightChange(weight)}
                          sx={{ fontWeight: weight }}
                        >
                          <ListItemDecorator>
                            {fontWeight === weight && <Check  />}
                          </ListItemDecorator>
                          {weight === '200' ? 'lighter' : weight}
                        </MenuItem>
                      ))}
                    </Menu>
                    <IconButton
                      variant={italic ? 'soft' : 'plain'}
                      color={italic ? 'primary' : 'neutral'}
                      aria-pressed={italic}
                      onClick={() => setItalic((prev) => !prev)}
                    >
                      <FormatItalic />
                    </IconButton>
                    {/* <Button sx={{ ml: 'auto' }}>Send</Button> */}
                  </Box>
                }
                sx={[
                  {
                    minWidth: 300,
                    fontWeight,
                  },
                  italic ? { fontStyle: 'italic' } : { fontStyle: 'initial' },
                ]}
              />
              <Button variant='contained' sx={{mt:'40px'}}>Submit</Button>
            </FormControl>
          </Box>      
        </Box>
      </Grid>
    </Layout>
  );
};

export default Contact;
