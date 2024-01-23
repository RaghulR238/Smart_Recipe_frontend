import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import { useState } from "react";
import axios from "axios";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import "./card2.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { data } from "./data";
import Navbar from "../components/nav";
import { Container } from "@mui/system";
import FavoriteIcon from '@mui/icons-material/Favorite';



let count = 0;

let ar = [];
export default function Result() {
  const navigate=useNavigate();
  const [title, setTitle] = useState([]);
  const[heartColor,setHeartColor]=useState('white');


  function startFilter() {
    const fil = location.state.customArray;
    console.log("filter started");
    console.log(fil);
    console.log(fil[0]);
    const filtered = data.filter(
      (obj) =>
        obj.vegetarian === false &&
        obj.readyInMinutes < fil[0] &&
        obj.spoonacularScore > fil[1]
    );
    console.log(filtered);
    if (count == 0) {
      count++;
      setTitle(filtered);
    }
  }

  const apiKey1 = "b9277005ebf74f12b62510043e2869a5";
  const apiKey = "4652d41224d74dbcb1ea92606a4e100f";
  const apiKey3 = "b3a6549e3e4142e6a9a8219944003f85";
  const apikeymaja = "b3a6549e3e4142e6a9a8219944003f85";
  const apikeyVasi = "75224b1718df478ea0892d31acae8ddf";
  const [state, setState] = React.useState({
    left: false,
  });
  const [hov, setHov] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };
  const handleChange = (event) => {
    seti(event.target.value);
  };
  function handleKeyPress() {
    setinputvalue(i);
    console.log("search bar" + "  " + inputvalue);
    fetchData();
  }

  const fetchData = async () => {
    try {
      console.log("fetch data called");
      console.log(inputvalue);
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${inputvalue}&addRecipeInformation=true&number=100&apiKey=${apikeymaja}`
      );

      ar = response.data;
      setTitle(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [inputvalue, setinputvalue] = useState("");
  const [i, seti] = useState("");

  const location = useLocation();
  console.log(location.state);

  if (location.state.search == null) {
    console.log("iuc");
    startFilter();
  } else {
    console.log(count);
    if (count == 0) {
      const receivedData = location.state && location.state.search;
      count++;
      console.log(receivedData);
      const newdata = receivedData;
      setinputvalue(newdata);
      seti(newdata);
      console.log(typeof inputvalue);
    }
  }

  useEffect(() => {
    if (inputvalue !== null && location.state.search != null) {
      console.log("useEffect");
      console.log(inputvalue);
      fetchData();
    }
  }, [inputvalue]);

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


  
  function handleSearch(){
    console.log(search);
    navigate('/result',{ state: { search } });
  }

  const[search,setSearch]=useState('');
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
        <InputBase
          placeholder="Enter your search"
          value={i}
          onChange={handleChange}
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
                onClick={handleKeyPress}
                sx={{
                  backgroundColor: "#783c04",
                  color: "white",
                  marginRight: "10px",
                  ":hover":{backgroundColor:"#783c04"}
                }}
              >
                search
              </Button>
              <Button
                sx={{ width: "50px", backgroundColor: "#783c04",":hover":{backgroundColor:"#783c04"}}}
                variant="contained"
                onClick={toggleDrawer(true)}
              >
                <TuneSharpIcon
                  onClick={toggleDrawer(true)}
                  sx={{ backgroundColor: "#783c04" }}
                />
              </Button>
            </>
          }
        />
          <div style={{height:'8px',backgroundColor:'#19e6e2'}}></div>
      </Stack>

      <Container sx={{ marginTop: "80px" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Pacifico', cursive",
            fontWeight: "bold",
            textAlign: "left",
            color: "black",
            margin: "20px 20px 20px 20px",
          }}
        >
          Results...
        </Typography>
        <Stack flex="row" sx={{ backgroundColor: "white" }}>
          <Grid container spacing={4}>
          
            {title.map((card) => (
              <Grid item key={card} xs={1} sm={1} md={3}>
                <Card
          onClick={() => navigate('/final', { state: { cardId: card.id } })}
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
                   <div style={{ position: "relative", }}>
  <FavoriteIcon sx={{ color: heartColor, position: "absolute", top: 2, right: 4,fontSize:'35px',':hover':{color:'red'} }}/>
  <img
    src={card.image}
    alt={title}
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
                      {card.title.toUpperCase().substring(0, 30)}
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
                      {card.cuisines[0]}
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
        </Stack>
      </Container>
    </div>
  );
}
