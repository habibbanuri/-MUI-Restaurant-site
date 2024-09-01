import { Box, Button, Typography } from "@mui/material"
import Layout from "../Layouts/Layout"
import home from '../../public/home.jpg';
import { Link } from "react-router-dom";
import '../index.css';
import menu1 from '../../public/menu1.jpg';
import menu2 from '../../public/menu2.jpg';
import menu3 from '../../public/menu3.jpg';
const Home = () => {
  return (
    <Layout>
      <Box>
        <div className="home" style={{backgroundImage:`url(${home})`}}>
          <div className="home_container">
            <Typography>
              <h1 className="home_main1">Food Website</h1>
              <h2 className="home_main2">Orginic Food is here</h2>
              <Link to='/menu'>
              <Button variant="outlined" sx={{color:'white',border:'2px solid white',mt:3}}>
                Order Now
              </Button>
              </Link>
            </Typography>
          </div>
        </div>

        {/* menu section start here */}
      </Box>
        <Typography sx={{textAlign:'center',fontSize:'1.5rem',my:'10px'}}>
          <h2>Our Menu</h2>
        </Typography>
      <Box sx={{display:'flex',justifyContent:'space-around',my:'30px',flexDirection:{
        xs: 'column', sm: 'row',
        // justifyContent: { xs: 'center', md: 'space-between',lg:'space-around' },
        // style={{width:'400px',height:'auto',borderRadius:'5px'}}
      }}}>
        <Box>
          <img  className="menu_img_1"  src={menu1} alt="menu" />
          <h3 className="menu_first">Russian Salid</h3>
          <Box sx={{display:'flex',justifyContent:'space-between',mt:'30px'}}>
          <Button  variant="outlined" sx={{border:'1px solid black',color:'black'}}>
            Order Now
          </Button>
          <Typography className="menu-discount">10% Discount</Typography>
          </Box>
        </Box>
        <Box>
          <img style={{width:'400px',height:'auto',borderRadius:'5px'}} src={menu2} alt="menu"  />
          <h3 className="menu_first">Italin Burger</h3>
          <Box sx={{display:'flex',justifyContent:'space-between',mt:'30px'}}>
          <Button  variant="outlined" sx={{border:'1px solid black',color:'black'}}>
            Order Now
          </Button>
          <Typography className="menu-discount">24% Discount</Typography>
          </Box>
        </Box>
        <Box>
          <img style={{width:'400px',height:'auto',borderRadius:'5px'}} src={menu3} alt="menu"  />
          <h3 className="menu_first">Vegetable souce</h3>
          <Box sx={{display:'flex',justifyContent:'space-between',mt:'30px'}}>
          <Button  variant="outlined" sx={{border:'1px solid black',color:'black'}}>
            Order Now
          </Button>
          <Typography className="menu-discount">14% Discount</Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home