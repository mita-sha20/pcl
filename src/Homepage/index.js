import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible , AiFillFacebook} from "react-icons/ai";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup, FacebookAuthProvider, getRedirectResult } from "firebase/auth";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../validation/validation";
import { useEffect } from "react";
import { Loginuser } from "../feature/Slice/UserSlice";
// import { Loginuser } from "../feature/Slice/UserSlice";
// import { useDispatch } from "react-redux";




const Homepage = () => {

  const [info, setInfo] = useState({
    name:"",
    password:"",
  });
const db = getDatabase();
const handlelogin=()=>{
 
 set(push(ref(db, "login")), {
  name:info.name,
  password:info.password,
 })
}

const [lodo,setlodo]=useState([]);
useEffect(()=>{
  const starCountRef = ref(db, "login");
  onValue(starCountRef, (snapshot) => {
   let logarr=[];
   snapshot.forEach((x)=>{
    logarr.push({...x.val(), id:x.key});
   });
   setlodo(logarr);
  });
 });


  const [passShow, setPassShow] = useState("password");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();
  // const facebookprovider = new FacebookAuthProvider();
  const navigate=useNavigate();
  // const dispatch=useDispatch();

  const handleShow = () => {
    if (passShow == "password") {
      setPassShow("text");
    } else {
      setPassShow("password");
    }
  };

  const intialValues = {
    name: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: intialValues,
    validationSchema: signIn,
    onSubmit: () => {
      setLoading(true);
      signInWithEmailAndPassword(
        auth,
        formik.values.name,
        formik.values.password
      )
        .then(({Loginuser}) => {
          if(auth.currentUser.emailVerified == true){
            navigate("/");
            // dispatch(Loginuser(user));
            localStorage.setItem('login',JSON.stringify(Loginuser));
          }else{
            console.log("vai verify kore asho");
          }
        })
        .catch((error) => {
          if (error.code.includes("auth/user-not-found")) {
            toast.error("Invalid email", {
              position: "bottom-center",
              autoClose: 1000,
              hideProgressBar: true,
              pauseOnHover: false,
            });
             setLoading(false);
          }
        });
    },
  });



  return (
    <>

<div class="headline">
            <marquee width="80%" direction="right" height="100px" scrollamount="16">
            welcome to smart voting system
                </marquee>
        </div>
    
        <div className="main_box">
      <Container fixed>
        <ToastContainer />
        <Grid className="box" container spacing={2}>
          <Grid item xs={7}>
        
               <div class="left">
                      <h3>  welcome to smart voting system</h3> 
                    <picture>
                        <img src="../images/R.jpg" alt=""/>
                    </picture>
                    <div class="left-text">
                        <p>Just like we do vote physically, here you can do same activity virtually.This platform is made to make the task easy and save time. Here everything is done exactly like it is done in a traditional method but in online.</p>
                    </div>
                </div>

          </Grid>
          <Grid item xs={5}>

    <div className="login-left">
    <div className="avatar">
      <picture>
        <img src="../images/avatar.png" alt="avatar" />
      </picture>
    </div>
    <h3>Login to your account!</h3>
     

    <form onSubmit={formik.handleSubmit}>
      <TextField
        className="inputs"
        label="name"
        type="name"
        name="name"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name && formik.touched.name ? (
        <p className="error_messasge">{formik.errors.name}</p>
      ) : null}
      <div className="passord-box">
        <TextField
         className="inputs"
         label="Password"
         type={passShow}
         name="password"
         variant="standard"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       <div className="eyes" onClick={handleShow}>
         {passShow == "password" ? (
           <AiOutlineEye />
         ) : (
           <AiOutlineEyeInvisible />
         )}
       </div>
     </div>
     {formik.errors.password && formik.touched.password ? (
       <p className="error_messasge">{formik.errors.password}</p>
     ) : null}
     {loading ? (
       <Button
         disabled
         className="btn"
         type="submit"
         variant="contained"
       >
         
       </Button>
     ) : (
       <Button onClick={()=>handlelogin()} className="btn" type="submit" variant="contained"><Link to="/voting">Sign In</Link>

       </Button>
     )}
</form>

    <div className="account">
      <p> Don't have an account?</p>
    
      <Link to="/registration">Sign Up</Link>{" "}
     
      
      
    </div>
  </div>
  
           
          </Grid>
        </Grid>
      </Container>
    </div>
  
 
     
        
        {/* <Grid className="box" container spacing={2}>
          <Grid item xs={6}>
            <div className="login-left">
              <div className="avatar">
                <picture>
                  <img src="./images/avatar.png" alt="avatar" />
                </picture>
              </div>
              <h3>Login to your account!</h3>
              <div className="authentication" >
                <div className="auth-pic">
                  <picture>
                    <img src="./images/logo.png" alt=""/>
                  </picture>
                </div>
               
                <div className="auth-text">
                  <p>Login with Google</p>
                </div>
                </div>
               
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  className="inputs"
                  label="Email"
                  type="email"
                  name="email"
                  variant="standard"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="error_messasge">{formik.errors.email}</p>
                ) : null}
                <div className="passord-box">
                <TextField
                    className="inputs"
                    label="Password"
                    type={passShow}
                    name="password"
                    variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <div className="eyes" onClick={handleShow}>
                    {passShow == "password" ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </div>
                </div>
                {formik.errors.password && formik.touched.password ? (
                  <p className="error_messasge">{formik.errors.password}</p>
                ) : null}
                {loading ? (
                  <Button
                    disabled
                    className="btn"
                    type="submit"
                    variant="contained"
                  >
                   
                  </Button>
                ) : (
                  <Button className="btn" type="submit" variant="contained">
                    Sign In
                  </Button>
     )}
     </form>
     <div className="account">
       <Link to="/forgetpassword">Forget password</Link>
       <p>
         Don't have an account? <Link to="/registration">Sign Up</Link>{" "}
       </p>
     </div>
   </div>
 </Grid>
</Grid> */}




                       
                {/* <div class="form-main">
                    <form action="post">
                        <div class="form-head">
                          <FaUserTie/>
                        </div>
                        <div class="right-main">
                            <p><input  type="text" placeholder="UID No"/></p>
                            <p><input type="password"  placeholder="password"/></p>
                           
                            <div class="right-button">
                               
                                <button class="login1" type='submit'><Link to="/voting">Click here</Link></button>
                                <p class="reg-p">Not registered ?<Link to="/registration">Register here</Link> </p>
                            </div>
                        </div>
    
                    </form>
                </div>
                 */}
       
    
   

</>
  )
}
    
       

export default Homepage
