import {
  AppBar,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  experimentalStyled,
  styled,
} from "@mui/material";
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import PublishIcon from "@mui/icons-material/Publish";
import { Box } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import "./app.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import logo from "./logo.png";
import { useLoginData } from "../loginDataContext";
import axios from "axios";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px",
  padding: "5px",
});
const ButtonStyle = styled(Button)({
  padding: "20px",
  backgroundColor: "blue",
  width: "100px",
  margin: "15px",
});
const ButtonStyle2 = styled(Button)({
  padding: "20px",
  color: "white",
  width: "500px",
  margin: "15px",
});

let count = 0;

const Navbar = () => {
  const { loginData, updateLoginData } = useLoginData();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogOut = async () => {
    try {
      const res = await axios.post("http://localhost:3002/api/auth/logout", {
        withCredentials: true,
      });
      localStorage.setItem("currentUser", null);
      navigate("/");
      updateLoginData(null);
      console.log("Data is", res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <AppBar
      position="sticky"
      sx={{ cursor: "pointer", backgroundColor: "black" }}
    >
      <StyledToolBar>
        <img
          src={logo}
          style={{ height: "100px", width: "100px", borderRadius: "50%" }}
        ></img>
        <Typography
          onClick={() => navigate("/")}
          variant="h2"
          sx={{
            whiteSpace: "nowrap",
            backgroundColor: "black",
            fontFamily: "'Pacifico', cursive",
            fontWeight: "bold",
            color: "white",
            marginBottom: "10px",
          }}
        >
          Smart Recipe <span style={{ color: "yellow" }}>.</span>
        </Typography>
        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h6 className="dropdown-button" style={{ fontWeight: "bold" }}>
            RECIPES
          </h6>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <h5 className="hh" onClick={()=>navigate("/recipe1")}>BreakFast Recipes</h5>
              <h5 className="hh" onClick={()=>navigate("/lunch")}>Lunch Recipes</h5>
              <h5 className="hh">Dinner Recipes</h5>
              <h5 className="hh">Dessert Recipes</h5>
              <h5 className="hh">Quick & Easy Recipes</h5>
            </div>
          )}
        </div>
        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h6 className="dropdown-button" style={{ fontWeight: "bold" }}>
            POPULAR
          </h6>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <h4 className="hh">Trending Now</h4>
              <h4 className="hh">Chili Recipes</h4>
              <h4 className="hh">Soup Recipe</h4>
              <h4 className="hh">Bread Recipes</h4>
              <h4 className="hh">Pasta Recipes</h4>
              <h4 className="hh">Salad Recipes</h4>
            </div>
          )}
        </div>
        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h6 className="dropdown-button" style={{ fontWeight: "bold" }}>
            CUISINE
          </h6>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <h4 className="hh">Mexican Recipes</h4>
              <h4 className="hh">Italian Recipes</h4>
              <h4 className="hh">Indian Recipes</h4>
              <h4 className="hh">Thai Recipes</h4>
              <h4 className="hh">Korean Recipes</h4>
              <h4 className="hh">Freach Recipes</h4>
              <h4 className="hh">Chinese Recipes</h4>
              <h4 className="hh">Japanese Recipes</h4>
              <h4 className="hh">Spanish Recipes</h4>
            </div>
          )}
        </div>
        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h6 className="dropdown-button" style={{ fontWeight: "bold" }}>
            MEAT & SEAFOOD
          </h6>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <h4 className="hh">Chicken Recipes</h4>
              <h4 className="hh">Salmon Recipes</h4>
              <h4 className="hh">Pork Chop Recipes</h4>
              <h4 className="hh">Ground Beef Recipes</h4>
              <h4 className="hh">Shrimp Recipes</h4>
            </div>
          )}
        </div>
        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h6 className="dropdown-button" style={{ fontWeight: "bold" }}>
            HEALTHY
          </h6>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <h4 className="hh">Keto Recipes</h4>
              <h4 className="hh">Healthy Recipes</h4>
              <h4 className="hh">Vegetariant Recipes</h4>
              <h4 className="hh">Vegan Recipes</h4>
              <h4 className="hh">Gluten-Free Recipes</h4>
              <h4 className="hh">Low-Carb Recipes</h4>
            </div>
          )}
        </div>

        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h6
            variant="contained"
            className="dropdown-button"
            onClick={() => navigate("/about")}
            style={{ fontWeight: "bold" }}
          >
            ABOUT
          </h6>
          
        </div>
        <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h6 variant="contained" className="dropdown-button" style={{ fontWeight: "bold" }}>
        <BreakfastDiningIcon  sx={{ fontSize: "30px"}} onClick={() => navigate("/mongoPage")}/>
        </h6>
        </div>

        <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h6 variant="contained" className="dropdown-button" style={{ fontWeight: "bold" }}>
        <SearchIcon
            sx={{ fontSize: "30px" }}
            onClick={() => navigate("/filter")}
          />
        </h6>
        </div>
        <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h6 variant="contained" className="dropdown-button" style={{ fontWeight: "bold" }}>
        <BookmarkBorderIcon
            sx={{ fontSize: "30px" }}
            onClick={() => navigate("/saves")}
          />
        </h6>
        </div>

        <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h6 variant="contained" className="dropdown-button" style={{ fontWeight: "bold" }}>
        <PublishIcon
            sx={{ fontSize: "30px" }}
            onClick={() => navigate("/upload")}
          />
        </h6>
        </div>

       
        
          
          
          
          

         
          {loginData !== null && (
            <Typography sx={{ color: "white",marginBottom:"8px",fontWeight:"bold",color:"#19e6e2"}}>
              {loginData.username.toUpperCase()}
            </Typography>
          )}

          {loginData === null ? (
            <div>
              <Avatar
                src="URL_TO_USER_PROFILE_IMAGE"
                onClick={handleClick}
                style={{ cursor: "pointer",marginBottom:"8px",fontSize:'100px' }}
              />

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Avatar
                src={loginData.image}
                onClick={handleClick}
                style={{ cursor: "pointer",marginBottom:"8px",fontSize:'50px' }}
              />

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
                <MenuItem onClick={()=>navigate("/wishlist")}>My Uploads</MenuItem>
                <MenuItem onClick={()=>navigate("/saves")}>My Whislist</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
