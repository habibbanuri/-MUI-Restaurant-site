import React from 'react';
import Layout from '../Layouts/Layout';
import { Box, Button, Typography } from '@mui/material';
import menu1 from '../../public/menu1.jpg';
import menu2 from '../../public/menu2.jpg';
import menu3 from '../../public/menu3.jpg';

const Menu: React.FC = () => {
  return (
    <>
      <Layout>
        {/* menu section start here */}
        <Box>
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', fontSize: '1.5rem', my: '10px' }}
          >
            Our Menu
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              my: '30px',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
            }}
          >
            <Box>
              <img className="menu_img_1" src={menu1} alt="menu" />
              <Typography variant="h3" className="menu_first">
                Russian Salad
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}
              >
                <Button
                  variant="outlined"
                  sx={{ border: '1px solid black', color: 'black' }}
                >
                  Order Now
                </Button>
                <Typography className="menu-discount">10% Discount</Typography>
              </Box>
            </Box>
            <Box>
              <img
                style={{ width: '400px', height: 'auto', borderRadius: '5px' }}
                src={menu2}
                alt="menu"
              />
              <Typography variant="h3" className="menu_first">
                Italian Burger
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}
              >
                <Button
                  variant="outlined"
                  sx={{ border: '1px solid black', color: 'black' }}
                >
                  Order Now
                </Button>
                <Typography className="menu-discount">24% Discount</Typography>
              </Box>
            </Box>
            <Box>
              <img
                style={{ width: '400px', height: 'auto', borderRadius: '5px' }}
                src={menu3}
                alt="menu"
              />
              <Typography variant="h3" className="menu_first">
                Vegetable Sauce
              </Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px' }}
              >
                <Button
                  variant="outlined"
                  sx={{ border: '1px solid black', color: 'black' }}
                >
                  Order Now
                </Button>
                <Typography className="menu-discount">14% Discount</Typography>
              </Box>
            </Box>
          </Box>
        </Box> {/* Missing closing tag added here */}
      </Layout>
    </>
  );
};

export default Menu;
