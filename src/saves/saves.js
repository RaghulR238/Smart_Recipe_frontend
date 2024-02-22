import React, { useEffect, useState } from 'react'
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { Box, Card, CardContent, CardMedia, Container, Grid, Rating, Stack, Typography } from '@mui/material';
import FavoriteIcon from "@mui/icons-material/Favorite";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./saves.css";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
export default function Saves() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState();
  useEffect(()=>{
    
    const fetchData = async () => {
      try {
        const allCookies = document.cookie;
  
        const response = await axios.get("https://smart-recipe-backend.onrender.com/api/saves/", {
          withCredentials: true,
          headers: {
            Cookie: allCookies,
          },
        });
        console.log(response.data);
        localStorage.setItem("currentUser", JSON.stringify(response.data));

      
        setTitle(response.data);
  
        console.log("Response:", response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[])
  return (
   
      <div>
      <Navbar />
      <Stack
        sx={{
          backgroundColor: "black",
          position: "fixed",
          top: "heightOfNavbarAbove",
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "left", color: "white", marginLeft: "700px",fontFamily: "'Dancing Script', cursive" }}
          
        >
          WISHLIST
        </Typography>
        <div style={{ height: "8px", backgroundColor: "#19e6e2" }}></div>
      </Stack>
      {(title && title[0] !== undefined) ? (
        <Container sx={{ marginTop: "100px" }}>
        
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
                          color: "red",
                          position: "absolute",
                          top: 2,
                          right: 4,
                          fontSize: "35px",
                          
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
        </Container>
      ):(
        <>
        <Box sx={{display:"flex",justifyContent:'center',marginTop:"120px",flexDirection:'column',alignItems:"center"}}>
          <ProductionQuantityLimitsIcon sx={{fontSize:'100px'}}/>
          <p style={{fontFamily: "'Dancing Script', cursive",marginTop:'20px',fontSize:'30px',color:"#783c04"}}>Nothing found in whislist</p>
          <Box sx={{backgroundColor:'#783c04',color:"white",padding:'20px',cursor:"pointer",fontSize:"20px"}} onClick={()=>navigate("/mongoPage")}>Start Shopping</Box>
        </Box>
          </>
      )}
      <Footer />
    </div>
      
  )
}
