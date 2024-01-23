import { CardMedia, Typography,Stack, Button, Grid, CardContent, AppBar, InputBase, styled, Toolbar, Rating } from '@mui/material'
import { Box, Container, color} from '@mui/system'
import React from 'react'
import Image from './img1.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import {useImage} from 'react-image';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import FileDownloadTwoToneIcon from '@mui/icons-material/FileDownloadTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import RamenDiningTwoToneIcon from '@mui/icons-material/RamenDiningTwoTone';
import SoupKitchenTwoToneIcon from '@mui/icons-material/SoupKitchenTwoTone';
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import FoodBankTwoToneIcon from '@mui/icons-material/FoodBankTwoTone';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { data } from './data'
import Navbar from '../components/nav'
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './fin.css'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import Footer from '../components/footer'
import DontMiss from '../dontmiss/dontmiss'
import Trending from '../trending/trending'

//console.log(data);

const StyledToolBar = styled(Toolbar)({
  margin: '10px',
  padding: '5px',
  fontSize: '50px',
  alignItems: 'center',
});

const useStyles1 = styled(Card)({

    height: '100px',
    display: 'flex',
    flexDirection: 'column',
  
});
const useStyles2=styled(CardContent)({

    marginLeft: "65px",
    marginTop: "10px",
    width: '180px',
    height: "180px",
  
});

function set(s)
{
  
if(s<25)
{
  return 1;
}
else if(s<50)
{
  return 2;
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


export default function Final() {
    
    
const [title,setTitle]=useState([]);
const [nutrient,setn]=useState();

//const apiKey='4652d41224d74dbcb1ea92606a4e100f';
const apikeymaja='b3a6549e3e4142e6a9a8219944003f85';
const apikeyVasi='75224b1718df478ea0892d31acae8ddf'

const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };
const apiKey1 = 'b9277005ebf74f12b62510043e2869a5';
const location = useLocation();
const recipeId = location.state.cardId;
const datamongo=location.state.data;

useEffect(() => {

  const fetchData = async () => {
    try {
      if(recipeId!=null)
      {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apikeymaja}`);
      
      console.log(response.data);
      console.log(response.data.title);

      setTitle(response.data);

      // Corrected the URL by adding '?' after 'nutritionLabel'
      const nutrient = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel?apiKey=${apikeymaja}`);
      
      console.log(nutrient.data);
      setn(nutrient.data);
      }
      else{
        setTitle(datamongo);
        console.log(datamongo);
      }
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


        return (
          <>
           <Navbar/>
           <div style={{height:'8px',backgroundColor:'#19e6e2',position: 'fixed', top: 'heightOfNavbarAbove', left: 0, right: 0, zIndex: 1000}}></div>

            <Container>
              <Typography variant='h5' sx={{color:'#4d79ff',marginTop:'30px'}}>
                Recipes<span style={{color:'black'}}> / </span>{title.sourceName}
              </Typography>
            <Typography  variant='h2' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold',marginTop:'20px'}}>
                    {title.title}
                  </Typography>
      
     
      <Rating name="half-rating-read" defaultValue={set(title.spoonacularScore)} size="large"  readOnly sx={{ marginTop:'20px',color:'darkred'}} />
    
        
        <div style={{marginTop:'10px' ,color:'grey'}}>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
        <Typography variant='h6' sx={{marginTop:'10px',color:'grey'}}>
          "Welcome to the world of delicious possibilities! Our collection of recipes brings you a diverse array of culinary creations to suit every taste and occasion. From quick and easy weekday meals to impressive dishes for special gatherings, each recipe is crafted with care and designed to inspire your inner chef."
        </Typography>
        <Stack direction="row" spacing={2} sx={{ margin: '10px' }}>
      <Button ><FavoriteTwoToneIcon sx={{ fontSize: 32 }} /></Button>
      <Button ><ShareTwoToneIcon sx={{ fontSize: 32 }}/></Button>
      <Button > <FileDownloadTwoToneIcon sx={{ fontSize: 32 }}/></Button>
    </Stack>
          
        
            <CardMedia
                  component="div"
                  sx={{
                    marginTop:'20px',
          
                   width:'600px',
                   height:"600px"
                  }}
                ><img src={title.image} alt={title} style={{ width: '800px', height: '600px' }} /></CardMedia>
      <Stack direction='row' sx={{marginTop:'30px'}}>
      <Typography variant='h6' >
        <RamenDiningTwoToneIcon sx={{fontSize:'25px', marginRight:'5px'}}/>
          Ready Time:{title.readyInMinutes}
      </Typography >
      <Typography variant='h6' sx={{marginLeft:'180px'}}>
        <WatchLaterTwoToneIcon sx={{marginRight:'5px'}}/>
        Servings:{title.servings}
      </Typography>
      <Typography variant='h6'sx={{marginLeft:'180px'}}>
        <SpaTwoToneIcon sx={{marginRight:'5px'}}/>
        Health Score:{title.healthScore}
      </Typography>
      </Stack>
      <Stack direction='row' sx={{marginTop:'30px'}}>
      <Typography variant='h6'>
        <MonetizationOnTwoToneIcon sx={{marginRight:'5px'}}/>
        Price Per Savings:{title.pricePerServing}
      </Typography>
      {title.vegetariant&&
          title.vegetariant?(
              <Typography variant='h6' sx={{marginLeft:'85px'}}><FoodBankTwoToneIcon sx={{marginRight:'5px',marginBottom:'5px'}}/>Food Type:veg    </Typography>
          ):(<Typography variant='h6' sx={{marginLeft:'85px'}}><FoodBankTwoToneIcon sx={{marginRight:'5px',marginBottom:'5px'}}/>Food Type:Non veg</Typography>)
      }
      
      {title.cuisines&&
        title.cuisines?(<Typography variant='h6' sx={{marginLeft:'110px'}}><SoupKitchenTwoToneIcon sx={{marginRight:'5px',marginBottom:'5px'}}/>Cuisine:{title.cuisines[0]}</Typography>):(<div>e</div>)
      }
      
      </Stack>
      <div style={{marginTop:'10px' ,color:'grey'}}>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
      <Typography  variant='h2' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold',marginTop:'20px'}}>
                   Ingredient :
                  </Typography>
      <Stack direction='row'>
      <Grid container spacing={4}>
        {title.extendedIngredients &&
          title.extendedIngredients.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} >
              <useStyles1 sx={{height:'10px'}}>
                <CardMedia
                  component="div"
                  sx={{
                    marginLeft:"65px",
                    marginTop:"10px",
                   width:'180px',
                   height:"180px"
                  }}
                ><img src={`https://spoonacular.com/cdn/ingredients_100x100/${card.image}`} alt={title} style={{ width: '150px', height: '150px' }} /></CardMedia>
                <useStyles2 sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                   Ingredients: {card.aisle}
                  </Typography>
                  <Typography sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
                    Name:{card.name}
                  </Typography>
                  <Typography sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
                    Quantity:{card.original} {card.unit}
                  </Typography>
                  
                  
                </useStyles2>
              </useStyles1>
            </Grid>
          
          ))}
        </Grid>
      </Stack>
      <div style={{marginTop:'30px'}}>
      <div>
        <button onClick={handleTogglePopup}><TouchAppIcon/> Open Nutrient Table</button>
      </div>

      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f0f0f0',
             padding: '20px',
            border: '1px solid #ccc',
            zIndex: 1000,
          }}
          onClick={handleTogglePopup}
        >
          <HighlightOffRoundedIcon onClick={handleTogglePopup} sx={{ fontSize: '35px',color:'red' , margin:'10px 0px 0px 280px'}} />
          <div dangerouslySetInnerHTML={{ __html: nutrient }}/>
          {/* <button onClick={handleTogglePopup}>Close</button> */}
        </div>
      )}
    </div>


    <Typography  variant='h2' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold',marginTop:'20px'}}>
                   Directions :
                  </Typography>
      {/* <Stack sx={{marginTop:'20px'}}>
  {title.analyzedInstructions &&
    title.analyzedInstructions.map((item, index) => (
      <div key={index}>
        {item.steps.map((i, inIndex) => (
          <ul key={inIndex}>
            <li style={{fontSize:'20px'}}>{i.step}</li>
          </ul>
        ))}

       
      </div>
    ))}
</Stack> */}



   {title.summary&& 
   <>
   <Typography  variant='h2' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold',marginTop:'20px'}}>
                   Summary :
                  </Typography>  
    
  <div style={{fontSize:'20px', marginTop:'30px',textAlign:'justify'}} dangerouslySetInnerHTML={{ __html: title.summary }} />
  </>
   }

    <Typography  variant='h2' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold',marginTop:'20px'}}>
                   Realted Dishes:
                  </Typography>
    <DontMiss/>
    <Trending/>
    </Container>
 <Footer/>
</>  
  )
}
