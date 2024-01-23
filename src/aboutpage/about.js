import React from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import { Avatar, Container, Stack, Typography } from '@mui/material'
import logo from './logo.png';
import i1 from './abouti1.jpg';
import i2 from './perfect.jpg';
import { width } from '@mui/system';
import "../whislist/whislist.css";
import { YouTube } from '@mui/icons-material';
export default function About() {
  const videoId = "M3srSPhAlsc"; 
  return (
    <>
    <Navbar/>
    <Stack sx={{ backgroundColor: 'black', position: 'fixed', top: 'heightOfNavbarAbove', left: 0, right: 0, zIndex: 1000 }}>
     <Typography variant="h3" sx={{textAlign:"center",whiteSpace: 'nowrap', backgroundColor:'black' ,color:'white',marginBottom:'20px',fontFamily: "'Dancing Script', cursive"}}>
          ABOUT US
        </Typography>
        <div style={{height:'8px',backgroundColor:'#19e6e2'}}></div>
        </Stack>
    <Container>
        <Stack direction='row'>   
            <img src={logo} style={{height:'300px',width:'300px',borderRadius:'50%',marginTop:'100px'}}></img>
    <Typography variant="h2" sx={{whiteSpace: 'nowrap',fontFamily: "'Pacifico', cursive" ,marginTop:'200px',marginLeft:'100px',fontWeight:'bold',color:'Black',marginBottom:'10px'}}>
          Smart Recipe <span style={{color:'yellow'}}>.</span>
        </Typography>
        </Stack>
<Typography variant='h5' sx={{fontFamily:"'Mukta', sans-serif",marginTop:'30px'}}>
Welcome to Smart Recipe, your gateway to a world of culinary delights and personalized gastronomic adventures. We believe that cooking is more than just a daily chore—it's an art, an exploration of flavors, and a way to connect with diverse cultures through the universal language of food.
</Typography>
<Stack direction='flex' spacing={2} marginTop={'50px'}>
    <img src={i1} style={{width:'700px',height:'500px',marginRight:'50px'}}></img>
    <Typography sx={{fontSize:'30px',fontFamily:"'Mukta', sans-serif",paddingTop:'80px',textAlign:'justify'}}><span><p style={{fontSize:'50px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>Our Mission </p></span>
    At Smart Recipe, our mission is to empower you on your culinary journey. We have curated an extensive collection of recipes from around the globe, thanks to our integration with the Spoonacular API. Whether you're a seasoned chef or a kitchen novice, our user-friendly website is designed to make your cooking experience enjoyable, educational, and, most importantly, delicious.
</Typography>
</Stack>
<div style={{display:"flex",justifyContent:"space-around"}}>
      <img src={i2} style={{width:"500px",height:"100%",paddingTop:"100px"}}></img>
    <div style={{paddingTop:"100px"}}>
         <iframe
        
        width="500"
        height="330"
        marginTop="100"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube Video Player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
</div>
      </div>
<Typography sx={{fontSize:'25px',fontFamily:"'Mukta', sans-serif",paddingTop:'80px',textAlign:'justify'}}><span><p style={{fontSize:'50px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>Diversity in Every Bite</p></span>
Discover a rich tapestry of flavors as our platform brings you recipes from diverse countries and cultures. From traditional classics to innovative fusions, our collection reflects the global nature of contemporary cuisine.
Tailor your culinary adventure with advanced search filters and dietary restrictions. Our platform leverages the power of the Spoonacular API to provide personalized recipe recommendations, ensuring that every meal suits your taste and lifestyle.</Typography>


<Stack direction='row' spacing={5} style={{ marginTop: '50px' }}>
  <Avatar sx={{ width: '300px', height: '300px', marginRight: '50px' }} src="/static/images/avatar/1.jpg" />
  <div>
    <Typography sx={{ fontSize: '25px', fontFamily: "'Mukta', sans-serif", paddingTop: '30px', textAlign: 'justify', marginLeft: '50px' }}>
      <span>
        <p style={{ fontSize: '50px', fontFamily: "'Mukta', sans-serif", fontWeight: 'bold' }}>Meet the Founder</p>
      </span>
      Hello, I'm Raghul, the driving force behind Smart Recipe. As a passionate food enthusiast and tech aficionado, I embarked on the journey of creating this platform to revolutionize your culinary experience.
    </Typography>
  </div>
</Stack>
<Typography sx={{fontSize:'25px',fontFamily:"'Mukta', sans-serif",paddingTop:'80px',textAlign:'justify'}}><span><p style={{fontSize:'50px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>The Vision</p></span>
Smart Recipe was born out of a vision to make cooking more accessible, enjoyable, and personalized for everyone. I believe that the intersection of technology and culinary arts can create a seamless and delightful cooking experience.
</Typography>
<Typography sx={{fontSize:'25px',fontFamily:"'Mukta', sans-serif",paddingTop:'80px',textAlign:'justify'}}><span><p style={{fontSize:'50px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>Thank You for Being a Part of Smart Recipe</p></span>
Thank you for joining me on this exciting culinary adventure. Together, let's make Smart Recipe your go-to destination for all things food and technology.</Typography>
   
    </Container>

    <Footer/>
    </>
  )
}
