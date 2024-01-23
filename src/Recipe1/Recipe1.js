import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import i1 from "./recipe11.jpg";
import i2 from "./recipe12.jpg";
import i3 from "./recipe13.jpg";
import i4 from "./recipe14.jpg";
import i6 from "./recipe16.jpg";
import Navbar from '../components/nav';
import Footer from '../components/footer';
import DontMiss from '../dontmiss/dontmiss';
import Res1 from './res1';

export default function Recipe1() {
    let videoId="k7ZfRknYUSE";
  return (
    <div>
        <Navbar/>
      <Container>
        <img src={i1} ></img>
      <Typography variant="h3" sx={{ fontFamily: "'Pacifico', cursive",textAlign:'left' ,color:'black', margin:'50px 50px 50px 0px'}}>
    BREAKFAST & BRUCH RECIPES
        </Typography>
        <Typography variant="h6" sx={{marginBottom:"20px",fontFamily:"'Mukta', sans-serif",}}>
            No morning is complete without a good meal,and we have all the wake up-worthy breahfast recipes to start your day off right
        </Typography>
        <div style={{display:"flex",justifyContent:"space-around"}}>

        <img src={i6}  ></img>
        <p style={{fontSize:'20px',fontFamily:"'Mukta', sans-serif",paddingTop:'50px',paddingLeft:"30px"}}>
        <span><p style={{fontSize:'30px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>Nutrient-Packed Breakfasts to Energize Your Mornings!</p></span>
        Elevate your mornings with our smart breakfast recipes that blend convenience and nutrition seamlessly.For a quick energy boost, try our Blueberry Power Smoothie, a vibrant mix of blueberries, banana, Greek yogurt, and spinach. If you prefer a fuss-free option, our Overnight Chia Pudding is a delightful choice, offering a perfect blend of chia seeds, almond milk, and fresh fruits. Whichever you choose, these recipes are designed to kickstart your day with delicious flavors and essential nutrients. Fuel your mornings the smart way!
        <Button variant="outlined" sx={{backgroundColor:'#783c04' ,color:'white',  width:"100%", border:"none",margin:'20px 0px 10px 0px',fontSize:'15px',transition: 'none', // Disable transition for hover effect
    ':hover': {
      backgroundColor: '#783c04', // Ensure the hover color is the same as the default color
      color: 'white',
      border:"none",
      width:"100%"
    }}}
          >
            SEE BREAKFAST RECIPES</Button>
        </p>
        </div>
        <Res1/>

        <div style={{display:"flex",justifyContent:"space-around",marginTop:"50px"}}>
            <div style={{width:"800px",height:"500px"}}>
        <iframe
        
        width="800"
        height="500"
        marginTop="100"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube Video Player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
        <p style={{fontSize:'20px',fontFamily:"'Mukta', sans-serif",paddingTop:'50px',paddingLeft:"30px"}}>
        <span><p style={{fontSize:'30px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}> Irresistible Milkshakes for Every Craving!</p></span>
        Our Berry Burst Delight combines fresh berries, banana, and a scoop of creamy yogurt for a vibrant and wholesome treat. For the chocolate lovers, our Decadent Chocolate Fantasy is a rich symphony of chocolate ice cream, milk, and a drizzle of chocolate syrup.
        
        </p>
        </div>
        
      </Container>
      <Footer/>
    </div>
  )
}
