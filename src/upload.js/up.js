import styled from "@emotion/styled";
import { Container, AppBar, Hidden, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

import Navbar from "../components/nav";
import Footer from "../components/footer";
import Round from "../round";
import Trending from "../trending/trending";
import { Box } from "@mui/system";

import { TextField } from "@mui/material";

import {
  Slider,
  Tooltip,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const TextFieldStyled= styled(TextField)({
//   margin:'10px',
//    padding: '6px',
//    fontSize: '50px',
//    width:'100%'
//  });

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const StyledToolBar = styled(Toolbar)({
  margin: "10px",
  padding: "5px",
  fontSize: "50px",
  alignItems: "center",
});

const TextFieldStyled = styled(TextField)({
  margin: "10px",
  padding: "10px",
  fontSize: "50px",
  width: "100%",
});

const ValueLabelComponent = (props) => {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={<Typography>{value}</Typography>}
    >
      {children}
    </Tooltip>
  );
};

const marks = [
  { value: -0.00000005, label: "poor" },
  { value: 0.0000003, label: "Excellent" },
];

export default function Up() {
  const [file, setFile] = useState(null);
  const navigate=useNavigate();

  const [upload, setUpload] = useState({
    title: "",
    image: "",
    analyzedInstructions: "",
    ingredients: Array(10).fill(""),
    pricePerServing:"",
    readyInMinutes:"",
    healthScore: -0.00000005,
    food_type: "veg",
    sourceName:'',
    spoonacularScore:"",
    servings:'',
  });

  // const handleChange = (e, index) => {
  //   const { name, value } = e.target;

  //   setUpload((prev) => ({
  //     ...prev,
  //     ingredients: prev.ingredients.map((ingredient, i) =>
  //       i === index ? value : ingredient
  //     ),
  //   }));
  // };
  const handleChange=(e)=>{
    setUpload((prev)=>{
      return {...prev,[e.target.name]:e.target.value};
    })
  }


  const uploads=async(file)=>{
    const data=new FormData();
    data.append("file",file);
    data.append("upload_preset","fiverr");

    try{
      const res=await axios.post("https://api.cloudinary.com/v1_1/dxqhpt91q/image/upload",data)
      console.log("result while uploading to cloudinary  : ",res.data.secure_url);
      return res.data.secure_url;
    }
    catch(err){
      console.log("Error on uploading Image  :  ",err);
    }
  }
  //console.log(upload);
  const allCookies = document.cookie;

  const handleSumbit = async(e, index) => {
    e.preventDefault()
    const url=await uploads(file);
    console.log("url is  :  ",url);
    try{
      await axios.post("http://localhost:3002/api/upload/up",{
        ...upload,
        image:url
      },{
        withCredentials: true,
        headers: {
          Cookie: allCookies,
        },
      },{})
    }catch(err){
      console.log(err)
    }
  };
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
          sx={{
            textAlign: "center",
            whiteSpace: "nowrap",
            backgroundColor: "black",
            color: "white",
            marginBottom: "20px",
          }}
        >
          UPLOAD PAGE
        </Typography>
        <div style={{ height: "8px", backgroundColor: "#19e6e2" }}></div>
      </Stack>

      <Container
        sx={{ marginTop: "100px", padding: "20px", backgroundColor: "#e1eaea" }}
      >
        {/* <Trending /> */}

        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            marginTop: "50px",
          }}
        >
          Recipe Name :
        </Typography>
        <TextField
          required
          id="outlined-required"
          placeholder="Recipe Name"
          sx={{ margin: "0px", marginTop: "20px" }}
          name="title"
          onChange={handleChange}
          value={upload.title}
        />

        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Upload Image :
        </Typography>
        <TextField
          type="file"
          accept="image/*"
          sx={{ margin: "0px", marginTop: "20px", marginLeft: "10px" }}
          name="image"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br></br>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "black", color: "white", marginLeft: "10px" }}
        >
          Upload Image
        </Button>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Directions :
        </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={6}
          placeholder="Enter the steps for preparation"
          name="analyzedInstructions"
          onChange={handleChange}
          value={upload.analyzedInstructions}
        />

        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            margin: "0px",
            marginTop: "20px",
          }}
        >
          Ingredients :
        </Typography>
        <Box
          sx={{
            height: "180px",
            overflowY: "scroll",
            backgroundColor: "white",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          {upload.ingredients.map((ingredient, index) => (
            <TextField
              key={index}
              id="outlined-required"
              placeholder={`Ingredient ${index + 1}`}
              sx={{ width: "100%" }}
              name={`ingredients[${index}]`}
              onChange={(e) => handleChange(e, index)}
              value={ingredient}
            />
          ))}
        </Box>

        {/* <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            margin: "0px",
            marginTop: "20px",
          }}
        >
          Equipments :
        </Typography>
        <TextField
          id="outlined-multiline-static"
          placeholder="Cooking Equipment"
          multiline
          sx={{ marginTop: "20px" }}
          name="equipments"
          rows={4}
          onChange={handleChange}
          value={upload.equipments}
        /> */}
        <Typography variant="h5" sx={{fontFamily: "'Mukta', sans-serif",fontWeight: "bold",margin: "0px",marginTop: "20px",}}>
          price Per Serving :
          </Typography>
        <TextField id="outlined" placeholder="Cooking Equipment" sx={{ marginTop: "20px" }} 
        name="pricePerServing" onChange={handleChange} value={upload.pricePerServing}
        />
         <Typography variant="h5" sx={{fontFamily: "'Mukta', sans-serif",fontWeight: "bold",margin: "0px",marginTop: "20px",}}>
          Source Name :
          </Typography>
        <TextField id="outlined" placeholder="Cooking Equipment" sx={{ marginTop: "20px" }} 
        name="sourceName" onChange={handleChange} value={upload.sourceName}
        />
        <Typography variant="h5" sx={{fontFamily: "'Mukta', sans-serif",fontWeight: "bold",margin: "0px",marginTop: "20px",}}>
        Spoonacular Score :
          </Typography>
        <TextField id="outlined" placeholder="Cooking Equipment" sx={{ marginTop: "20px" }} 
        name="spoonacularScore" onChange={handleChange} value={upload.spoonacularScore}
        />
        <Typography variant="h5" sx={{fontFamily: "'Mukta', sans-serif",fontWeight: "bold",margin: "0px",marginTop: "20px",}}>
       Servings :
          </Typography>
        <TextField id="outlined" placeholder="Cooking Equipment" sx={{ marginTop: "20px" }} 
        name="servings" onChange={handleChange} value={upload.servings}
        />
        <Typography variant="h5" sx={{fontFamily: "'Mukta', sans-serif",fontWeight: "bold",margin: "0px",marginTop: "20px",}}>
       Ready Time:
          </Typography>
        <TextField id="outlined" placeholder="Cooking Equipment" sx={{ marginTop: "20px" }} 
        name="readyInMinutes" onChange={handleChange} value={upload.readyInMinutes}
        />
        {/* <Typography variant="h5" sx={{fontFamily: "'Mukta', sans-serif",fontWeight: "bold",margin: "0px",marginTop: "20px",}}>
       Health :
          </Typography>
        <TextField id="outlined" placeholder="Cooking Equipment" sx={{ marginTop: "20px" }} 
        name="healthScore" onChange={handleChange} value={upload.healthScore}
        /> */}

        {/* <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Timing :
        </Typography>
        <TextField
          required
          id="outlined-required"
          placeholder="Timing"
          sx={{ marginTop: "20px" }}
          name="timing"
          onChange={handleChange}
          value={upload.timing}
        /> */}

        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Complexity :
        </Typography>
        <TextField
          id="outlined"
          placeholder="Complexity"
          sx={{ marginTop: "20px" }}
          name="complexity"
          onChange={handleChange}
          value={upload.complexity}
        />

        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Health Score :
        </Typography>
        <Slider
          aria-label="Small steps"
          defaultValue={upload.healthScore}
          step={0.00000006}
          marks={marks}
          min={-0.00000005}
          max={0.0000003}
          ValueLabelComponent={ValueLabelComponent}
          sx={{ width: "50%", marginTop: "20px", marginLeft: "30px" }}
        />
        <br></br>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Mukta', sans-serif",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Food Type :
        </Typography>
        <FormControl sx={{ marginLeft: "20px", marginTop: "20px" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={upload.food_type}
            onChange={handleChange}
          >
            <FormControlLabel value="veg" control={<Radio />} label="veg" />
            <FormControlLabel
              value="non-veg"
              control={<Radio />}
              label="non-veg"
            />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "20px", marginTop: "50px", backgroundColor: "black" }}
          fullWidth
          onClick={handleSumbit}
        >
          Upload Your Recipe
        </Button>
      </Container>

      <Footer />
    </div>
  );
}
