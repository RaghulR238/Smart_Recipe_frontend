import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import i1 from "./img1.jpg";
import { Box, Container, height } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Rating, Typography } from '@mui/material';
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";


export default function Lunch() {
    const navigate=useNavigate();
  const [title, setTitle] = useState([]);
  const apiKey = "4652d41224d74dbcb1ea92606a4e100f";
  const apiKey3 = "b3a6549e3e4142e6a9a8219944003f85";
  function set(s) {
    if (s < 25) {
      return 1;
    } else if (s < 50) {
      return 2;
    } else if (s < 75) {
      return 3;
    } else if (s < 80) {
      return 3;
    } else {
      return 5;
    }
  }

  useEffect(()=>{

      const fetchData = async () => {
          try {
            console.log("fetch data called");
         
            const response = await axios.get(
              `https://api.spoonacular.com/recipes/complexSearch?query=lunch&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&apiKey=${apiKey3}`
            );
      
            
            setTitle(response.data.results);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
  },[])

  return (
    <div>
        <Navbar/>
        <Container sx={{marginBottom:"30px"}}>
            
                {title.map((card) => (
            <>
        <div style={{height:'auto',width:'80%',position:"relative"}}>
            <img src={card.image} style={{height:"auto",width:'80%'}}></img>
        </div>
        <div style={{padding:"20px",position: 'absolute', zIndex: '1',backgroundColor:"white",marginTop:"-80px",marginLeft:"30px",width:"45%",height:"200px"}}>
            <h6>RECIPE</h6>
        <h3 style={{fontWeight:"bold"}}> {card.title.toUpperCase().substring(0, 30)}</h3>
        <Typography sx={{ marginTop: "10px" }}>
                      <span style={{ fontWeight: "bold" }}>
                        PRICE PER SERVING :{" "}
                      </span>
                      {card.pricePerServing}
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
                        defaultValue={set(card.spoonacularScore)}
                        sx={{ color: "yellow" }}
                        size="large"
                        readOnly
                      />
                      <TimerSharpIcon
                        sx={{ fontSize:"30px",color: "yellow", marginLeft: "300px" }}
                      />
                      <Typography sx={{ fontSize:"20px" }}>{card.readyInMinutes}min</Typography>
                    </Box>
        <div style={{ height: "8px", backgroundColor: "#19e6e2",marginTop:"45px" }}></div>
        </div>
        <p style={{height:"200px"}}></p>
        </>
                ))}
                </Container>
        <Footer/>
    </div>
  )
}
