import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import { Stack, color } from '@mui/system';
import I1 from './i1.jpg';
import I2 from './i2.jpg';
import I3 from './i3.jpg';
//import './filter.css';
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Checkbox,
  AppBar,
  Typography,
  Toolbar,
  InputBase,
  Container,
} from '@mui/material';
import { Carousel, CarouselCaption, FormLabel } from 'react-bootstrap';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import styled from '@emotion/styled';
import Image from './img1.jpg';
import Image2 from './Filter2.jpg';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Result from '../result.js/result';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import fil from './fil.jpg';
import Round from '../round';
import cake from './cake.jpg'
import DontMiss2 from './dontmis/filterMiss';
import Round2 from './round';



const StyledToolBar = styled(Toolbar)({
  margin: '10px',
  padding: '5px',
  fontSize: '50px',
  alignItems: 'center',
});

const count=[1,2,3,4,5,6,7,8,9,10,11,12,13];
export default function TemporaryDrawer() {


  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };

  //const[search,setSearch]=useState('');
  const[search,setSearch]=useState('');
  const navigate=useNavigate();

  function handleSearch(){
    console.log(search);
    navigate('/result',{ state: { search } });
  }


  const[cooktime,setcooktime]=useState('');
   const[ratings,setRatings]=useState('');
   const[difficulty,setDifficulty]=useState('');
   const[type,setType]=useState('');
   const[hygienic,setHygienic]=useState('');
  const[filterData,setFilterData]=useState([]);
  const[arr,setArr]=useState([]);
  function handlefilter(){
    navigate('/result',{ state: { filterData } });
  }
  function handleSubmit() {
    
    const newData = [cooktime, ratings, difficulty, type, hygienic];
  
    navigate('/result', { state: {customArray: newData } });
  }
  
  
  return (
  
    <div>

      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        <HighlightOffRoundedIcon onClick={toggleDrawer(false)} sx={{ fontSize: '35px',color:'red' , margin:'10px 0px 0px 180px',cursor:"pointer"}} />
        <Stack sx={{ alignItems: 'center', padding: '10px'}}>
          <OutdoorGrillIcon sx={{fontSize:'40px',color:'#783c04'}}/>
          <Typography variant="h2" component="div" sx={{  fontFamily: "'Pacifico', cursive",flexGrow: 1, textAlign: 'center',color:"#783c04" }}>
            Filter
          </Typography>
          <TextField
            label="Cooking Time"
            sx={{ color:'white', margin:'20px 0px 15px 0px'}}
            placeholder="Enter user name"
            fullWidth
            onChange={(e)=>setcooktime(e.target.value)}
          ></TextField>
          <FormControl fullWidth sx={{color:'black', m: 1, minWidth: 120, margin:'20px 0px 20px 0px' }}>
            <InputLabel id="demo-simple-select-label">Ratings</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={ratings} onChange={(e)=>setRatings(e.target.value)}>
              <MenuItem value={80}>5</MenuItem>
              <MenuItem value={50}>4+</MenuItem>
              <MenuItem value={30}>3+</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{color:'black', m: 1, minWidth: 120 , margin:'20px 0px 20px 0px'}}>
            <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}>
              <MenuItem value={10}>Hard</MenuItem>
              <MenuItem value={20}>Medium</MenuItem>
              <MenuItem value={30}>Easy</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ color:'black',margin:'20px 0px 15px 0px'}}>
            <FormLabel id="demo-row-radio-buttons-group-label">Food Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={type} 
              onChange={(e)=>setType(e.target.value)}
            >
              <FormControlLabel value="veg" control={<Radio />} label="Veg" />
              <FormControlLabel value="non-veg" control={<Radio />} label="Non-Veg" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            value="start"
            control={<Checkbox checked={hygienic} onChange={(e)=>setHygienic(e.target.value)}/>}
            label="Pure Hygienic"
            labelPlacement="start"
            sx={{ color:'black',margin:'20px 0px 10px 0px'}}
          />
          <Button variant="outlined" sx={{backgroundColor:'#783c04' ,color:'white', border:"none",margin:'20px 0px 10px 0px',fontSize:'15px',transition: 'none', // Disable transition for hover effect
    ':hover': {
      backgroundColor: '#783c04', // Ensure the hover color is the same as the default color
      color: 'white',
      border:"none"
    }}}
          onClick={handleSubmit}>
            SUBMIT</Button>
        </Stack>
      </Drawer>


     
      <Navbar/>
      <div style={{height:'8px',backgroundColor:'#19e6e2',position: 'fixed', top: 'heightOfNavbarAbove', left: 0, right: 0, zIndex: 1000}}></div>

     <Container>
        <Box flex={2.7} sx={{ marginTop: "30px", padding: 0 }}>
        {/* <Container sx={{ position: 'relative', padding: '0', margin: '0' }}> */}
      <Carousel
        style={{
          width: '100%',
          height: '668px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        interval={1000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={I1}
            alt="First slide"
            style={{ objectFit: 'cover', height: '668px' }}
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={I2}
            alt="First slide"
            style={{ objectFit: 'cover', height: '668px' }}
          />
          
        </Carousel.Item><Carousel.Item>
          <img
            className="d-block w-100"
            src={I3}
            alt="First slide"
            style={{ objectFit: 'cover', height: '668px' }}
          />
         
        </Carousel.Item>
      </Carousel>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="45%"
        left="35%"
        transform="translate(-50%, -50%)"
        bgcolor="rgba(255, 255, 255, 0.5)"
        borderRadius="8px"
        p={3}
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        
        
      >
        <Typography variant="h4" sx={{fontWeight:"bold", color:"#783c04",marginBottom: '1rem' }}>
          Cook Your Favorite
        </Typography> 
         <InputBase
          placeholder="Enter your search"
          sx={{
            backgroundColor: 'white',
            padding: '0.5rem',
            borderRadius: '5px',
            width: '500px',
          }}
          onChange={(e)=>setSearch(e.target.value)}
          startAdornment={<SearchIcon />}
        />
        <Button variant="contained" sx={{backgroundColor:'#783c04' ,color:'white', margin:'20px 0px 10px 0px',fontSize:'15px',transition: 'none', // Disable transition for hover effect
    ':hover': {
      backgroundColor: '#783c04', // Ensure the hover color is the same as the default color
      color: 'white',
    }}} onClick={handleSearch}>
          Serve
        </Button>
        
      </Stack>

      <DontMiss2/>
        </Box>
        <Typography variant="h3" sx={{ fontFamily: "'Pacifico', cursive",textAlign:'left' ,color:'black', margin:'50px 50px 50px 0px'}}>
    Filter By Ingredients...
        </Typography>
        <Box
      flex={1}
      sx={{
        marginTop:"50px",
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
       height:'450px',
        backgroundImage: `url(${fil})`,
    
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the alpha value for transparency
        color: 'black', // Set the text color to contrast with the background
      }}
    >
      <Stack  
  
        transform="translate(-50%, -50%)"
        bgcolor="rgba(255, 255, 255, 0.8)"
        borderRadius="8px"
        p={3}
        sx={{height:"372px", overflowY:'scroll',width:"500px",marginLeft:'500px',marginTop:'25px'}}
        >

      <Typography variant='h4' sx={{marginBottom:'20px'}}>Enter Ingredient:<span style={{marginLeft:'89px'}}><button  style={{color:'white',backgroundColor:'#783c04',border:"none",fontSize:'25px'}}><SearchIcon /> Find</button></span></Typography>
      {count.map((c) => (
        <TextField key={c} fullWidth label={`Ingredient${c}`} id={`Ingredient${c}`} />
      ))}
      
      </Stack>
    </Box>
    
    <Round2/>
    <Stack direction='flex' spacing={2} marginTop={'50px'}>
    <img src={cake} style={{width:'100%',height:'600px',marginRight:'50px'}}></img>
    <Typography sx={{fontSize:'20px',fontFamily:"'Mukta', sans-serif",paddingTop:'100px'}}><span><p style={{fontSize:'30px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>The Art of Exquisite Cake Craftsmanship</p></span>Cakes have a rich history that dates back centuries. The concept of baking a sweet, flour-based food has been present in various cultures. The ancient Egyptians were among the first to show evidence of baking skills, and over time, different civilizations contributed to the development of the cake we know today.The art of cake decorating has evolved into a creative endeavor. Skilled bakers use various techniques, such as fondant sculpting, piping, and edible decorations, to turn simple cakes into stunning works of art. Special occasions like weddings and birthdays often feature elaborately decorated cakes that reflect the theme or interests of the celebration.



</Typography>
    </Stack>
    </Container>
    <Footer/>

      </div>
  
  );
}
