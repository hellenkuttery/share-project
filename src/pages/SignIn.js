import React from "react";
import { Button,Grid,Container} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Formik,Form,Field } from 'formik';
import firebase from "../firebase/firebase.utils"
import firebaseUtils from "../firebase/firebase.utils";
function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}
const handleGooglebutton = () => {
  firebase.useGoogleProvider();
}


function SignIn(){
  console.log(firebase)
  return(
  <Formik
  initialValues= {{
    username:"",
    email:"",
    password: '',
  }}
  onSubmit={values => {
    // same shape as initial values
    console.log(values);
  }}>
   
    
   
    <form onSubmit={Formik.handleSubmit}>
      <Container maxWidth="sm">
        <Grid container  spacing={3}>
            <Grid item xs={12}>
                <TextField 
                name="username" 
                label="Username" 
                variant="outlined" 
                fullWidth  
                value={Formik.values.username}
                onChange={Formik.handleChange}
                /> 
            </Grid>
            <Grid  item xs={12} >
                <TextField 
                name="email" 
                label="E-mail" 
                variant="outlined" 
                fullWidth 
                onChange={Formik.handleChange}
                value={Formik.values.email}/>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                name="password" 
                label="Password" 
                variant="outlined"
                fullWidth 
                onChange={Formik.handleChange}
                value={Formik.values.password}
                type="password"/>
            </Grid>
            <Grid item xs={12} >
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button >
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={handleGooglebutton}>SignUp With Google</Button>
            </Grid>
        </Grid>   
      </Container>
      </form>
  </Formik>
   
    );
}



  

export default SignIn