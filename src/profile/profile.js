import { Box, Card, CardContent, CardMedia, Container, Grid, Rating, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import { useLoginData } from '../loginDataContext';
import { Typography } from '@mui/material';
import i1 from './profile1.jpg';
import i2 from './proimage2.jpg';
import { height } from '@mui/system';
import "./profile.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from "@mui/icons-material/Favorite";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


export default function Profile() {
    const { loginData, updateLoginData } = useLoginData();
    const [wishlistCount, setWishlistCount] = useState(0);
    const [userActivity, setUserActivity] = useState([]);
    const [achievements, setAchievements] = useState([]);
console.log(loginData);
const navigate = useNavigate();
const [title, setTitle] = useState();

  useEffect(()=>{
    
    const fetchData = async () => {
      try {
        const allCookies = document.cookie;
  
        const response = await axios.get("https://smart-recipe-backend.onrender.com/api/upload/", {
          withCredentials: true,
          headers: {
            Cookie: allCookies,
          },
        });
        console.log(response.data);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
  
        setTitle(response.data.slice(0,4));
  
        console.log("Response:", response.data.slice(0,4));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[])



  return (
  <>
  <Navbar/>
  <div style={{height:'8px',backgroundColor:'#19e6e2',position: 'fixed', top: 'heightOfNavbarAbove', left: 0, right: 0, zIndex: 1000}}></div>

  <Box  color='white' bgColor="dark" style={{
     
     backgroundImage: `url(${i1})`,
     height: '500px',
     backgroundSize: 'cover',
     position: 'relative', // Ensure positioning context for absolute overlay
     color: 'white',
   }}>
     <div style={{backgroundColor:'rgba(0, 0, 0, 0.7)',paddingTop:"30px"}}> 
     <h1 style={{fontFamily: "'Dancing Script', cursive",fontSize:"80px",textAlign:"center"}}>Profile</h1>
     </div>
<div style={{backgroundColor:'rgba(0, 0, 0, 0.5)',marginTop:"-13px"}}>
        <div style={{display:"flex",justifyContent:"space-evenly",width:"1000px"}}>
     <img src={loginData.image} alt='Profile' style={{padding:'30px', width: '350px', height: '350px', borderRadius: '50%' }} />
    
     <div style={{padding:'50px',height:"380px",fontWeight:"bold"}}>
        <p>NAME: </p>
        <p>LASTNAME:</p>
        <p>EMAIL: </p>
        {/* <p>Google ID: {loginData.googleId}</p> */}
        <p>COUNTRY:</p>
        <p>STATE:</p>
        <p>MOBILE NUMBER:</p>
      </div>
      <div style={{padding:'50px',height:"380px",marginLeft:"-80px"}}>
        <p>{loginData.username}</p>
        <p>{loginData.lastname}</p>
        <p> {loginData.email}</p>
        {/* <p>Google ID: {loginData.googleId}</p> */}
        <p>{loginData.country}</p>
        <p>{loginData.state}</p>
        <p>{loginData.mobile_number}</p>
      </div>
      </div>
      </div>
     </Box>


  <Container>
    <h1 style={{fontFamily: "'Dancing Script', cursive",fontWeight:"bold",marginTop:"20px"}}>YOUR UPLOADS</h1>
    {(title && title[0] !== undefined) ? (
        <div style={{ marginTop: "50px" }}>
          <Grid container spacing={4}>
            {title.map((card) => (
              <Grid item key={card} xs={1} sm={1} md={3}>
                <Card
                  onClick={() =>
                    navigate("/final", { state: {data:card} })
                  }
                  sx={{
                    height: "454px",
                    width: "250px",
                    display: "flex",
                    flexDirection: "column",
                    //transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    ":hover": {
                      //transform: 'scale(1.1)',
                      //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      backgroundColor: "#19e6e2",
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      marginLeft: "0px",
                      marginTop: "0px",
                      width: "250px",
                      height: "200px",
                      backgroundColor: "white",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <FavoriteIcon
                        sx={{
                          color: "white",
                          position: "absolute",
                          top: 2,
                          right: 4,
                          fontSize: "35px",
                          ":hover": { color: "red" },
                        }}
                      />
                      <img
                        src={card.image}
                        style={{ width: "250px", height: "200px" }}
                      />
                    </div>
                  </CardMedia>
                  <CardContent sx={{ backgroundColor: "white" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "bold",
                        height: "80px",
                      }}
                    >
                      {card.title&&card.title.toUpperCase().substring(0, 30)}
                    </Typography>

                    <Typography sx={{ marginTop: "10px" }}>
                      <span style={{ fontWeight: "bold" }}>
                        PRICE PER SERVING :{" "}
                      </span>
                      {card.pricePerServing}
                    </Typography>
                    <Typography sx={{ marginTop: "10px" }}>
                      <span style={{ fontWeight: "bold" }}>
                        HEALTH SCORE :{" "}
                      </span>
                      {card.healthScore}
                    </Typography>
                    <Typography sx={{ marginTop: "10px" }}>
                      <span style={{ fontWeight: "bold" }}>CUISINES : </span>
                      {/* {card.cuisines[0]} */}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        textAlign: "right",
                        marginTop: "10px",
                      }}
                    >
                      <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        sx={{ color: "yellow" }}
                        size="medium"
                        readOnly
                      />
                      <TimerSharpIcon
                        sx={{ color: "yellow", marginLeft: "35px" }}
                      />
                      <Typography>{card.readyInMinutes}min</Typography>
                    </Box>
                  </CardContent>
                  <p></p>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant='h6' sx={{cursor:"pointer",color:"black",textAlign:"right",textDecoration:"underline",":hover": { color: "#19e6e2" }}}>view more</Typography>
        </div>
      ):(
        <>
        <Box sx={{display:"flex",justifyContent:'center',marginTop:"120px",flexDirection:'column',alignItems:"center"}}>
          <ProductionQuantityLimitsIcon sx={{fontSize:'100px'}}/>
          <p style={{fontFamily: "'Dancing Script', cursive",marginTop:'20px',fontSize:'30px',color:"#783c04"}}>No uploads yet</p>
          <Box sx={{backgroundColor:'#783c04',color:"white",padding:'20px',cursor:"pointer",fontSize:"20px"}} onClick={()=>navigate("/upload")}>Start Uploading</Box>
        </Box>
          </>
      )}
  </Container>


       <Footer />
      
 
    </>
  )
}
