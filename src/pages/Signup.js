import React from "react";
import { Button,Grid,Container} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import firebase from "../firebase/firebase.utils"
import firebaseUtils from "../firebase/firebase.utils";


function Signup(){
  console.log(firebase)
  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 20) {
      errors.password = 'Must be 20 characters or less';
    }
    return errors;
  };






    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
        },
        validate,
        onSubmit: (values) => {
          // alert(JSON.stringify(values, null, 2));
          firebase.register(values.email,values.password)
        },
      });
     

    const handleGooglebutton = () => {
      firebase.useGoogleProvider();
    }

    return(
   
    <form onSubmit={formik.handleSubmit}>
      <Container maxWidth="sm">
        <Grid container  spacing={3}>
            <Grid item xs={12}>
                <TextField 
                name="username" 
                label="Username" 
                variant="outlined" 
                fullWidth  
                value={formik.values.username}
                onChange={formik.handleChange}
                /> 
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
            </Grid>
            <Grid  item xs={12} >
                <TextField 
                name="email" 
                label="E-mail" 
                variant="outlined" 
                fullWidth 
                onChange={formik.handleChange}
                value={formik.values.email}/>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </Grid>
            <Grid item xs={12}>
                <TextField 
                name="password" 
                label="Password" 
                variant="outlined"
                fullWidth 
                onChange={formik.handleChange}
                value={formik.values.password}
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
    );
}

export default Signup