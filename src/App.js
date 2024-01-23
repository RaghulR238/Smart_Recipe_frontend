import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Container, Grid, Rating} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Stack, styled } from '@mui/system';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Box from '@mui/material/Box';
import Content from './components/content';
import Rightside from './components/rightcontent';
import Navbar from './components/nav';
import { useState,useEffect } from 'react';
import R1 from './components/Right';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TimerIcon from '@mui/icons-material/Timer';
import "react-multi-carousel/lib/styles.css";
import Footer from './components/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import axios from 'axios';
import Ice from './Icecream.jpg';
import i1 from './i1.jpg';
import i2 from './i2.jpg';
import i3 from './i3.jpg';
import i4 from './i4.jpg';
import i5 from './i5.jpg';
import i6 from './i6.jpg';
import i7 from './i7.jpg';
import milkShake from './milkShake.jpg';
import Round from './round';
import DontMiss from './dontmiss/dontmiss';
import Trending from './trending/trending';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate=useNavigate();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const frameStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '250px', // Adjust the width as needed
    height: '200px', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}
   
  };
 


  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    
  };
  const[title,setTitle]=useState([]);
const apikeymaja='b3a6549e3e4142e6a9a8219944003f85';
const apiKey1 = "b9277005ebf74f12b62510043e2869a5";
useEffect(()=>
{
  const fetchData = async () => {
    try {
      console.log("fetch data called");

      const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey1}`);

     console.log(response.data.recipes);
      setTitle(response.data.recipes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
},[])

function set(s)
{

if(s<25)
{
  return 1;
}
else if(s<50)
{
  return 2.5;
}
else if(s<75)
{
  return 3;
}
else if(s<80)
{
  return 3;
}
else 
{
 
  return 5;
}

}
  return (
    <>
    
    <Navbar/>
   <Container sx={{marginTop:'-20px'}}>
      <R1/>
    <Stack direction='column'   >
      <Content />
    </Stack>
    <Typography variant="h3" sx={{ fontFamily: "'Pacifico', cursive",textAlign:'left' ,color:'black', margin:'50px 50px 50px 0px'}}>
    Heavenly Bites
        </Typography>



    <Slider {...settings} >
    {/* <Stack container spacing={4} direction='row'> */}
          {title&&title.map((card) => (
            <Grid item key={card} xs={30} sm={6} md={4} >
              


              <Card
              onClick={() => navigate('/final', { state: { cardId: card.id } })}

              sx={{ height:'380px' ,width:'250px', display: 'flex', flexDirection: 'column' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}}>
              <CardMedia
                  component="div"
                  sx={{
                   
                   width:'300px',
                   height:"250px"
                  }}
                ><img src={card.image} style={{ width:'300px',height:'250px' }} /></CardMedia>
                <CardContent >
                  <Typography  variant='h5' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>
                    {card.title.toUpperCase()}
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
          ))}
        {/* </Stack> */}
    </Slider>
<Stack direction='flex' spacing={2} marginTop={'50px'}>
    <img src={Ice} style={{width:'700px',height:'600px',marginRight:'50px'}}></img>
    <Typography sx={{fontSize:'20px',fontFamily:"'Mukta', sans-serif",paddingTop:'100px'}}><span><p style={{fontSize:'30px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>Unveiling the Delightful Ice Cream</p></span>The concept of ice cream can be traced back to ancient China, where a frozen mixture of milk and rice was likely the precursor to what we now know as ice cream. It is said that the Chinese royalty enjoyed a frozen dessert made with milk, rice, and natural flavorings as early as 200 BC. Fast forward to today, and ice cream has evolved into a beloved treat enjoyed by people around the world in a myriad of flavors and forms. It's fascinating to see how a simple frozen concoction has such a rich and ancient history!

</Typography>
    </Stack>
<DontMiss/>
<Round/>
<Stack direction='flex' spacing={2} marginTop={'100px'}>
    <img src={milkShake} style={{width:'700px',height:'600px',marginRight:'50px'}}></img>
    <Typography sx={{fontSize:'20px',fontFamily:"'Mukta', sans-serif",paddingTop:'100px'}}><span><p style={{fontSize:'30px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}> Sipping Sweet Nostalgia</p></span>Milkshakes, the timeless concoction of milk, ice cream, and flavorings, evoke a sense of joy and indulgence. This classic beverage has transcended generations, becoming a symbol of cool refreshment and delightful sweetness enjoyed by people of all ages.



</Typography>
    </Stack>
    <Trending/>

    </Container>
    <Footer/>
    </>
  );
};

export default App;