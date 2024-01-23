import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import Image from "./footer2.jpg";
import logo from "./logo-footer.png";
import { Box, IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import styled from "@emotion/styled";
export default function Footer() {
  const HoverFacebook = styled(Facebook)`
  
  &:hover {
    color: #19e6e2;
  }
`;
const HoverTwitter = styled(Twitter)`
  
  &:hover {
    color: #19e6e2;
  }
`;
const HoverInstagram = styled(Instagram)`
  
  &:hover {
    color: #19e6e2;
  }
`;
const HoverGoogle = styled(Google)`
  
  &:hover {
    color: #19e6e2;
  }
`;
const HoverGitHub = styled(GitHub)`
  
  &:hover {
    color: #19e6e2;
  }
`;
const HoverLinkedIn = styled(LinkedIn)`
  
  &:hover {
    color: #19e6e2;
  }
`;
  return (
    <Box
      className="text-center"
      color="white"
      bgColor="dark"
      style={{
        backgroundImage: `url(${Image})`,
        height: "298px",
        backgroundSize: "cover",
        //position: 'relative', // Ensure positioning context for absolute overlay
        color: "white",
        marginTop:"30px"
      }}
    >
      <div style={{ height: "30px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        {" "}
      </div>
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <img src={logo} style={{ height: "180px", width: "180px" }}></img>
        <div>
          <h3 style={{ marginTop: "30px",color:"#19e6e2"}}>Address</h3>
          <p>karpagam college of engineering</p>
          <p>Coimbatore</p>
        </div>
        <div>
          <h3 style={{ marginTop: "30px",color:"#19e6e2"}}>Contact us</h3>

          <p>raghulrajan2887.gmail.com</p>
          <p>Tiruppur</p>
        </div>
        <div>
          <h3 style={{ marginTop: "30px",color:'#19e6e2'}}>Follow us</h3>
          <p>raghulrajan2887.gmail.com</p>
          <div style={{ display: "flex" }}>
            <IconButton
              href="#!"
              
            >
              <HoverFacebook sx={{color:"white"}} />

            </IconButton>

            <IconButton href="#!">
              <HoverTwitter  sx={{color:"white"}}/>
            </IconButton>

            <IconButton href="#!">
              <HoverGoogle  sx={{color:"white"}}/>
            </IconButton>

            <IconButton href="#!">
              <HoverInstagram  sx={{color:"white"}}/>
            </IconButton>

            <IconButton href="#!" onClick={()=>{ window.open('https://www.linkedin.com/in/raghul-rajan-32972a263', '_blank')}}>
              <HoverLinkedIn sx={{color:"white"}} />
            </IconButton>

            <IconButton href="#!">
              <HoverGitHub  sx={{color:"white"}}/>
            </IconButton>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color: "#19e6e2" }}
      >
        © 2023 Copyright @raghulrajan2887@gmail.com
      </div>
    </Box>
  );
}

/* <section className='mb-0' style={{ marginTop: '-200px' }}>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        

        <section className='mb-0'>
         
        <MDBBtn outline color="light"    >
          Welcome to the world of delicious possibilities! Our collection of recipes brings you a diverse array of culinary creations to suit every taste and occasion. From quick and easy weekday meals to impressive dishes for special gatherings, each recipe is crafted with care and designed to inspire your inner chef.
          </MDBBtn>
        </section>

        
   
       */
