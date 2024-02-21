import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import axios from 'axios';
import { Card, CardContent, CardMedia, Container, Grid, Rating, Stack, Typography,Box, InputBase, Button } from '@mui/material';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from 'react-router-dom';
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import SearchIcon from "@mui/icons-material/Search";


const CartNotification = ({ message }) => {
  console.log(message);
  return (
    <div
      style={{
        display: "none",
        //position: 'fixed',
        top: '10px',
        right: '10px',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        //width:"100px",
        //borderRadius: '5px',
       // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display:message ? 'block' : 'none',
      }}
    >
     {message}
    </div>
  );
};




export default function MongoPage() {
  const [cartMessage, setCartMessage] = useState('');
    const navigate=useNavigate();
    const [title, setTitle] = useState();
    const [searchMongo,setSearch]=useState('');
    const [searchValue,setSearchValue]=useState();
    useEffect(()=>{
    
        const fetchData = async () => {
          try {
            const allCookies = document.cookie;
      
            const response = await axios.get("https://main--graceful-kleicha-2d0c35.netlify.app/api/upload/all", {
              withCredentials: true,
              headers: {
                Cookie: allCookies,
              },
            });
            console.log("Mongo Content  :  ",response.data);
            localStorage.setItem("currentUser", JSON.stringify(response.data));
      
            setTitle(response.data);
      
            console.log("Response:", response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      },[])

      function handleSubmit()
      {
        setSearchValue(searchMongo);
        console.log(searchValue);
      }

      const allCookies = document.cookie;
      async function handleSaves(e,card)
      {
        e.stopPropagation();
        console.log(card);
        const { _id, ...cleanedCard } = card;
        setCartMessage('Item added to wishlist');
        setTimeout(() => {
          setCartMessage('');
        }, 3000);
        try{
          await axios.post("https://main--graceful-kleicha-2d0c35.netlify.app/saves/create",{
            ...cleanedCard
          },{
            withCredentials: true,
            headers: {
              Cookie: allCookies,
            },
          },{})
          
        }
        catch(err)
        {
          console.log(err.response.data)
        }
      }
      

  return (
    <div>
      <Navbar/>
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
        <InputBase
          placeholder="Enter your search"
           value={searchMongo}
          onChange={(e)=>setSearch(e.target.value)}
          sx={{
            backgroundColor: "white",
            padding: "0.5rem",
            borderRadius: "5px",
            width: "800px",
            marginLeft: "350px",
            marginBottom: "10px",
          }}
          startAdornment={<SearchIcon />}
          endAdornment={
            <>
              <Button
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#783c04",
                  color: "white",
                  marginRight: "10px",
                  ":hover":{backgroundColor:"#783c04"}
                }}
              >
                search  
              </Button>
            </>
          }
        />
          <div style={{height:'8px',backgroundColor:'#19e6e2'}}></div>
          <CartNotification message={cartMessage} />
      </Stack>
      {/* <CartNotification message={cartMessage} /> */}
      
      {title && (
        <Container sx={{ marginTop: "130px" }}>
          <Grid container spacing={4}>
            
            {title
       .filter((c) => c.title && c.title.includes(searchMongo || ''))
        .map((card) => (
              <Grid item key={card} xs={1} sm={1} md={3}>
                <Card
                  onClick={() =>
                    navigate("/final", { state: { data: card } })
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
                          color: "grey",
                          position: "absolute",
                          top: 2,
                          right: 4,
                          fontSize: "35px",
                          ":hover": { color: "red" },
                        }}
                        onClick={(e)=>handleSaves(e,card)}
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
      )}

       
   
      <Footer/>
    </div>
  )
}
