import { Typography,Stack } from "@mui/material";
import i1 from './i1.jpg';
import i2 from './i2.jpg';
import i3 from './i3.jpg';
import i4 from './i4.jpg';
import i5 from './i5.jpg';

const frameStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '250px', // Adjust the width as needed
    height: '200px', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}
   
  };
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

function Round(){
    return(
        <>
        
<Typography variant="h3" sx={{ fontFamily: "'Pacifico', cursive",textAlign:'left' ,color:'black', margin:'50px 50px 50px 0px'}}>
    EXPLORE MORE
        </Typography>
    <Stack direction='row' spacing={4} sx={{marginTop:'50px'}}>
    <div style={frameStyle}>
      <img src={i1}  style={imageStyle} />
    </div>
    <div style={frameStyle}>
      <img src={i2}  style={imageStyle} />
    </div>
    <div style={frameStyle}>
      <img src={i3}  style={imageStyle} />
    </div>
    <div style={frameStyle}>
      <img src={i4}  style={imageStyle} />
    </div>
    <div style={frameStyle}>
      <img src={i5}  style={imageStyle} />
    </div>
    {/* <div style={frameStyle}>
      <img src={i6}  style={imageStyle} />
    </div> */}
    </Stack>
    </>
    );
}
export default Round;