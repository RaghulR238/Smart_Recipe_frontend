import React, { useEffect } from "react";
import { useState } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import { gapi } from "gapi-script";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import i1 from "./i1.jpg";
import "./login.css";
import { Container } from "@mui/system";
import { Stack, TextField } from "@mui/material";
import logo from "./logo.png";
import { useLoginData } from "../loginDataContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginData, updateLoginData } = useLoginData();
  const [file, setFile] = useState(null);

  const clientId =
    "78443822827-qdtukmvcl5qrb8fsqauou6nt6pqhkkdu.apps.googleusercontent.com";

  useEffect(() => {
    gapi.load("client:auth2", () => gapi.auth2.init({ clientId: clientId }));
  }, []);

  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  // Check for stored state on component mount
  useEffect(() => {
    const storedState = localStorage.getItem("loginState");
    if (storedState) {
      const { showLogin, showLogout } = JSON.parse(storedState);
      setShowLoginButton(showLogin);
      setShowLogoutButton(showLogout);
    }
  }, []);

  const onLoginSuccess = (res) => {
    setShowLoginButton(false);
    setShowLogoutButton(true);
    updateLoginData(res.profileObj);
    localStorage.setItem(
      "loginState",
      JSON.stringify({ showLogin: false, showLogout: true })
    );
    navigate("/");
  };

  const onSignoutSuccess = () => {
    alert("Signed Out");
    setShowLoginButton(true);
    setShowLogoutButton(false);
    updateLoginData(null);
    // Clear state from localStorage on signout
    localStorage.removeItem("loginState");
    navigate("/");
  };

  const onFailureSuccess = (res) => {
    alert("Login failed");
    console.log("login failed", res);
  };
  const [upload, setUpload] = useState({
    username: "",
    image: "",
    email: "",
    password: "",
    country: "",
    lastname: "",
    state: "",
    mobile_number:"",
 
  });

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
  // const [username, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [country, setCountry] = useState("");
  //  const [state, setState] = useState("");
  //  const [image, setImage] = useState("");
  // const [error, setError] = useState(null);
  // const handleFirstNameChange = (e) => {
  //   setFirstName(e.target.value);
  // };
  // const handleLastNameChange = (e) => {
  //   setLastName(e.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   setemail(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setpassword(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/login",
        //{ username, password },
        {...upload},
        { withCredentials: true }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      updateLoginData(res.data);
      navigate("/");
      console.log("efce");
      console.log(res.data);
    } catch (err) {
      //setError(err.response.data);

      console.log(err.response.data);
    }
  };


  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3002/api/auth/register",
  //       { ...upload },
  //       { withCredentials: true }
  //     );

  //     console.log(res.data);
  //   } catch (err) {
  //     setError(err.response.data);

  //     console.log(err.response.data);
  //   }
  // };

  const handleRegister = async(e, index) => {
    e.preventDefault()
    const url=await uploads(file);
    console.log("url is  :  ",url);
    try{
      const res=await axios.post("http://localhost:3002/api/auth/register",{
        ...upload,
        image:url
      },{
        withCredentials: true,
        
      },{})
      console.log(res.data);
    }catch(err){
      console.log(err)
    }
  };
  const [newUser, setNewUser] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = {
    backgroundColor: isHovered ? 'white' : '#783c04',
    color: isHovered ? '#783c04' : 'white',
    border: 'none',
    transition: 'background-color 0.5s ease',
  };
  return (
    <Stack sx={{ backgroundColor: "#dcc838" }}>
      <MDBContainer fluid className="my-4" >
        <MDBRow className="g-0 align-items-center" >
          <MDBCol col="6" >
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
                
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center" > 
                <img
                  src={logo}
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                ></img>

                {newUser ? (
                  <div>
                    <h2 className="fw-bold mb-5">Sign in</h2>
                    <MDBRow>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First name"
                          id="form1"
                          type="text"
                          name="username"
                          value={upload.username}
                          onChange={ handleChange}
                        />
                      </MDBCol>

                    
                    </MDBRow>

                 
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form4"
                      type="password"
                      name="password"
                      value={upload.password}
                      onChange={ handleChange}
                    />

                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={handleSubmit}
                      style={{backgroundColor:"#783c04",color:"white",border:'none',}}
                    >
                      sign in
                    </MDBBtn>
                    // <p>or sign in with:</p>

                    // <div>
                    //   {showLoginButton ? (
                    //     <GoogleLogin
                    //       clientId={clientId}
                    //       buttonText="Login with Google"
                    //       onSuccess={onLoginSuccess}
                    //       onFailure={onFailureSuccess}
                    //       cookiePolicy={"single_host_origin"}
                    //       prompt="select_account"
                    //     />
                    //   ) : null}
                    //   {showLogoutButton ? (
                    //     <GoogleLogout
                    //       clientId={clientId}
                    //       buttonText="Logout"
                    //       onLogoutSuccess={onSignoutSuccess}
                    //     />
                    //   ) : null}
                    // </div>
                    <p style={{ margin: "20px" }}>
                      Don't have an account!{" "}
                      <span
                        style={{ color: "blue", cursor: "pointer",textDecoration:"underline",transition: "background-color 0.5s ease",":hover":{backgroundColor:"white"}}}
                        onClick={() => setNewUser(false)}
                      >
                        Sign Up
                      </span>
                    </p>
                    {/* <MDBBtn className="w-100 mb-4" size="md" onClick={handleLogOut}>
                  Logout
                </MDBBtn> */}
                  </div>
                ) : (
                  <div className="text-center">
                    <h3 style={{fontWeight:"bold"}}>Create a new account</h3>
                    <MDBRow>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First name"
                          id="form1"
                          type="text"
                          name="username"
                          value={upload.username}
                          onChange={ handleChange}
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last name"
                          id="form2"
                          type="text"
                          name="lastname"
                          value={upload.lastname}
                          onChange={ handleChange}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Mobile Number"
                          id="form1"
                          type="text"
                          name="mobile_number"
                          value={upload.mobile_number}
                          onChange={ handleChange}
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Email"
                          id="form2"
                          type="text"
                          name="email"
                           value={upload.email}
                          onChange={handleChange}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Password"
                          id="form4"
                          type="password"
                          name='password'
                          value={upload.password}
                          onChange={handleChange}
                        />
                      </MDBCol>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Confirm Password"
                          id="form4"
                          type="password"
                          ///value={password}
                          //onChange={handlePasswordChange}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol col="6">
                        <h5 style={{margin:'5px'}}>Profile Picture</h5>
                        <TextField
                          type="file"
                          accept="image/*"
                          
                          name="upload_image"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </MDBCol>
                      <MDBCol>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Country"
                          id="form2"
                          type="text"
                          name="country"
                          value={upload.country}
                          onChange={handleChange}
                        />
                      </MDBCol>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="State"
                          id="form2"
                          type="text"
                          name="state"
                          value={upload.state}
                          onChange={handleChange}
                        />
                      </MDBCol>
                      </MDBCol>
                    </MDBRow>

                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={handleRegister}
                    >
                      Register
                    </MDBBtn>

                    {/* {error && error} */}
                    
                  </div>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src={i1}
              style={{ height: "800px" }}
              class="w-100 rounded-4 shadow-4"
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Stack>
  );
}
