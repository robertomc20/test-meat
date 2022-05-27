import { Box, Container, Grid, Paper, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import mainPic from '../assets/images/hero.png';
import secondPic from '../assets/images/BRUSH-3 2.png';
import '../assets/styles/styles.css';
import Header from '../layouts/Header';
// import { red } from '@mui/material/colors';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MediaCard from '../components/Card';
import Footer from '../layouts/Footer';
// import imageOne from '../assets/images/1.png';
// import imageTwo from '../assets/images/2.png';
// import imageThree from '../assets/images/3.png';

const Home = () => {
  // const [onFocusTab, setOnFocusTab] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [articlesArray, setArticlesArray] = useState([]);
  // const [tabOptionSelected, setTabOptionSelected] = useState('');

  const handleChangeTabValue = (event, newValue) => {
    setTabValue(newValue);
  };

  const getArticles = (option) => {
    console.log(option);
    let url = '';
    if (option || option != 'TODOS') {
      url = `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${option}`;
    }
    if (option == 'TODOS' || option == undefined || option == null) {
      console.log('no hay');
      url = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles';
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticlesArray(data));
  };

  useEffect(() => {
    getArticles();
  }, []);

  // console.log(articlesArray);
  return (
    <>
      <Header />

      <Container fixed>
        <Box sx={{ height: '100vh', flexGrow: 1 }}>
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
            <img
              style={{
                position: 'absolute',
                width: 550,
                height: 70,
                marginTop: 50,
                marginLeft: -60,
                opacity: 0.3
              }}
              src={secondPic}></img>
            <span className="primary-font article-title">Nuestros artículos</span>
          </div>
          <Grid style={{ marginTop: '20px' }} container direction="row">
            <Grid item xs={2}>
              <Paper elevation={3}>
                <Tabs
                  onChange={handleChangeTabValue}
                  value={tabValue}
                  textColor="secondary"
                  orientation="vertical">
                  <Tab
                    // onMouseOver={() => setOnFocusTab(true)}
                    // onMouseOut={() => setOnFocusTab(false)}
                    // icon={<ArrowForwardIcon fontSize="small" />}
                    // iconPosition="end"
                    label="Todos"
                    onClick={(e) => getArticles(e.target.innerText.toUpperCase())}
                  />
                  <Tab
                    label="Productos"
                    onClick={(e) => getArticles(e.target.innerText.toUpperCase())}
                  />
                  <Tab
                    label="Recetas"
                    onClick={(e) => getArticles(e.target.innerText.toUpperCase())}
                  />
                  <Tab
                    label="Consejos"
                    onClick={(e) => getArticles(e.target.innerText.toUpperCase())}
                  />
                </Tabs>
              </Paper>
            </Grid>
            <Grid item xs container direction="row">
              <Grid item xs columnSpacing={2}>
                {articlesArray.map((article, index) => (
                  <MediaCard
                    key={index}
                    image={article.image}
                    title={article.title}
                    desc={article.content}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Home;
