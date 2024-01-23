import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Grid, Typography, Button, Rating, Container, Box } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import Image from './img1.jpg';
// import './card.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { borderRadius } from "@mui/system";
import "./app.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Con = () => {
const[title,setTitle]=useState([]);
const apikeymaja='b3a6549e3e4142e6a9a8219944003f85';
useEffect(()=>
{
  const fetchData = async () => {
    try {
      console.log("fetch data called");

      const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apikeymaja}`);

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
const navigate=useNavigate();

  return (
    <>
    <Typography variant="h3" sx={{ fontFamily: "'Pacifico', cursive",textAlign:'left' ,color:'black', margin:'20px 20px 20px 10px'}}>
        Epic Flavor Journeys...
        </Typography>
      <Box
        sx={{height:"555px", overflowY:'scroll', padding:'20px' ,marginTop:'30px' }}
      >
        
        <Grid container spacing={4} >
          {title&&title.map((card) => (
            <Grid item key={card} xs={30} sm={6} md={4}>
              


              <Card 
                    onClick={() => navigate('/final', { state: { cardId: card.id } })}

              sx={{ height:'330px' ,width:'300px', display: 'flex', flexDirection: 'column' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',':hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}}>
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
        </Grid>
      </Box>
      </>
  );
};

export default Con;





// overflowY: 'auto' and maxHeight: 'calc(100vh - 64px)' are applied to the Container that wraps the Grid. This allows the cards to be scrollable within the specified container height.
// maxHeight is set to 'calc(100vh - 64px)' to ensure that the cards don't overflow the viewport height, and 64px is an estimate for the typical height of the app bar.