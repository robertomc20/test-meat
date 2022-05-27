import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import mainPic from '../assets/images/hero.png';
import secondPic from '../assets/images/BRUSH-3 2.png';
import '../assets/styles/styles.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${mainPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        height: 600,
        width: '100%'
        // maxWidth: "auto",
        // backgroundSize: "auto",
      }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction={'column'} justifyContent="flex-end" alignItems={'flex-end'}>
          <Grid item xs={12} style={{ marginTop: '50px', marginRight: '50px' }}>
            <Button>
              <FacebookIcon />
            </Button>
            <Button color="error" sx={{ marginLeft: '20px' }}>
              <InstagramIcon color="error" />
            </Button>

            <Button color="warning" sx={{ marginLeft: '20px' }}>
              <YouTubeIcon color="warning" />
            </Button>
          </Grid>
        </Grid>
        <Grid container direction={'column'} justifyContent="flex-start" alignItems={'flex-start'}>
          <Grid item xs={12} style={{ marginTop: '50px' }}>
            <span className="primary-font header-text">Logo</span>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: '160px' }}>
          <span className="primary-font header-text">El secreto</span>
          <br />
          <div>
            <img
              style={{
                position: 'absolute',
                width: 800,
                height: 150,
                marginTop: 40,
                marginLeft: -250
              }}
              src={secondPic}></img>
            <span className="primary-font header-text" style={{ marginTop: '35px' }}>
              de tu cocina
            </span>
          </div>
        </Grid>
      </Box>
    </header>
  );
};

export default Header;
