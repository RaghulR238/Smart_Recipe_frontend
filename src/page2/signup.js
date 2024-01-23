import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CheckBox, Copyright } from "@mui/icons-material";

const RoundContainer = () => {
  return (
    <Container sx={{ backgroundColor: "black", padding: "20px" }}>
      <Typography
        color="white"
        sx={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "blue",
          marginTop: "10px",
        }}
      >
        LOG IN
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Paper
          elevation={3}
          sx={{
            width: "50%",
            height: "600px",
            borderRadius: "100%", // This makes the container round
            display: "flex",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack>
            <Grid align="center">
              <Avatar>R</Avatar>
              <h1>Sign In</h1>
            </Grid>
            <TextField
              label="username"
              sx={{ backgroundColor: "white" }}
              placeholder="Enter user name"
              fullWidth
            ></TextField>
            <TextField
              label="password"
              sx={{ backgroundColor: "white" }}
              placeholder="Enter Password"
              type="password"
              fullWidth
            ></TextField>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button variant="contained" type="submit" color='primary'>Sign In</Button>
            <Typography>
                <Link>
                Forget password?
                </Link>
            </Typography>
          
          </Stack>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            width: "50%",
            height: "600px",
            borderRadius: "100%", // This makes the container round
            display: "flex",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <Stack >
            <Typography variant="h4">
                New SignUp
            </Typography>
            <Link variant="h6">
            Sign up now...
            </Link>
            <Typography variant="h4" align="center">
                or
            </Typography>
         </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default RoundContainer;