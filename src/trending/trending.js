import {  Card,CardContent, CardMedia, Typography } from "@mui/material";
import trend1 from './trend1.jpg';
import trend2 from './trend2.jpg';
import trend3 from './trend3.jpg';
import trend4 from './trend4.jpg';
import { Stack } from "@mui/system";
function Trending()
{
    return(
        <>
         <Typography variant="h3" sx={{ fontFamily: "'Pacifico', cursive",textAlign:'left' ,color:'black', margin:'50px 50px 50px 0px'}}>
    Trending...
        </Typography>
    <Stack direction='row' spacing={4} sx={{marginTop:'50px'}}>
    <Card sx={{ height:'330px' ,width:'330px', display: 'flex', flexDirection: 'column' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',':hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}}>
              <CardMedia
                  component="div"
                  sx={{
                   
                   width:'300px',
                   height:"300px"
                  }}
                ><img src={trend4} style={{ width:'250px',height:'250px' }} /></CardMedia>
                <CardContent >
                  <Typography  variant='h5' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>
                    CREAMY NOODLES
                  </Typography>

                </CardContent>
              </Card>
              <Card sx={{ height:'330px' ,width:'330px', display: 'flex', flexDirection: 'column' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',':hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}}>
              <CardMedia
                  component="div"
                  sx={{
                   
                   width:'300px',
                   height:"300px"
                  }}
                ><img src={trend2} style={{ width:'250px',height:'250px' }} /></CardMedia>
                <CardContent >
                  <Typography  variant='h5' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>
                    PIZZA
                  </Typography>

                </CardContent>
              </Card>
              <Card sx={{ height:'330px' ,width:'330px', display: 'flex', flexDirection: 'column' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',':hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}}>
              <CardMedia
                  component="div"
                  sx={{
                   
                   width:'300px',
                   height:"300px"
                  }}
                ><img src={trend3} style={{ width:'250px',height:'250px' }} /></CardMedia>
                <CardContent >
                  <Typography  variant='h5' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>
                    CROISSONTS
                  </Typography>

                </CardContent>
              </Card>
            
              <Card sx={{ height:'330px' ,width:'330px', display: 'flex', flexDirection: 'column' ,transition: 'transform 0.3s ease, box-shadow 0.3s ease',':hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}}>
              <CardMedia
                  component="div"
                  sx={{
                   
                   width:'300px',
                   height:"300px"
                  }}
                ><img src={trend1} style={{ width:'250px',height:'250px' }} /></CardMedia>
                <CardContent >
                  <Typography  variant='h5' sx={{fontFamily:"'Mukta', sans-serif",fontWeight:'bold'}}>
                    ICE STICK
                  </Typography>

                </CardContent>
              </Card>
    </Stack>
    </>
    );

}

export default Trending;