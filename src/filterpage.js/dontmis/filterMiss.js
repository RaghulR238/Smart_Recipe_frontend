import {Stack, Typography } from "@mui/material";
import snack1 from './snack1.jpg';
import snack2 from './snack2.jpg';
import snack3 from './snack3.jpg';


const containerStyle = {
  position: 'relative',
  width: '400px', // Adjust the width as needed
  height: '500px', // Adjust the height as needed
};

const imageStyle = {
  width: '380px',
  height: '500px',
  objectFit: 'cover',
};

const overlayStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '400px',
  padding: '20px', // Adjust the padding as needed
  boxSizing: 'border-box',
  color: 'white',
  position: 'relative',
  transform:"translate(-50%, -50%)",
  bgcolor:"rgba(255, 255, 255, 0.8)",
  marginLeft:'200px',
  marginBottom:"100px"
}

const shadowLayerStyle = {
  content: "''",
  position: 'absolute',
  width: '380px',
  height: '150px',
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
 // Adjust the color and opacity of the shadow
  zIndex: -1,
  marginBottom:"20px"
};
function DontMiss2()
{
    return(
      <>
        <Typography variant="h3" sx={{ fontFamily: "'Pacifico', cursive",textAlign:'left' ,color:'black', margin:'50px 50px 50px 0px'}}>
        Flavor Finesse
        </Typography>
      
        <Stack direction="row" spacing={2}>
           
      
        <div style={containerStyle}>
      <img src={snack1} alt="Sweet" style={imageStyle} />
      <div style={overlayStyle}>
        <div style={shadowLayerStyle}>
          <h1 style={{margin:'30px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>A Crispy Delight of Indian Cuisine</h1>
      </div>
          </div>
        
    </div>
    <div style={containerStyle}>
      <img src={snack2} alt="Sweet" style={imageStyle} />
      <div style={overlayStyle}>
        <div style={shadowLayerStyle}>
          <h1 style={{margin:'30px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>Poppable Joy in Every Kernel</h1>
      </div>
          </div>
        
    </div>
    <div style={containerStyle}>
      <img src={snack3} alt="Sweet" style={imageStyle} />
      <div style={overlayStyle}>
        <div style={shadowLayerStyle}>
          <h1 style={{margin:'30px',fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>Crispy Gold from the Potato </h1>
      </div>
          </div>
        
    </div>
    </Stack>
        </>
    );

}
export default DontMiss2;