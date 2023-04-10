import React, { useState } from 'react'
import { BoxContainer ,BoxInputs} from './Registration.styled'
import {Box,Fab,TextField, Typography, Link}  from '@mui/material';
import { useDispatch } from "react-redux";
import {authSingUpUser} from '../../redux/auth/authOperations'

const Registration = () => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch= useDispatch()

    const handleSubmit=() => {
        if(!email || !password ||!login) {
          alert("Please enter your login, email and password");
          return
        }
        console.log(dataUser);
        dispatch(authSingUpUser(dataUser))
        setLogin("");
          setPassword("");
          setEmail("");
         
       }
      const dataUser={
        login, email, password
      }
  return (
    <BoxContainer>
      <BoxInputs>
        <Typography align='center' variant='h4' color='white' mb={2}>
      Registration
      </Typography>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch'},
         '& .MuiInputBase-input':{color: 'pink'} , 
        "& .MuiInputBase-root": {
          "& fieldset": {
            borderColor: "white"
          },
          "&.Mui-focused fieldset": {
             borderColor: "white",
          },
          "&:hover  .MuiOutlinedInput-notchedOutline" : {
            borderColor : "lightPink"
         },
        },
        '& .MuiInputLabel-outlined':{color: 'pink'} ,
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  required  defaultValue={login}  onChange={(event)=>setLogin(event.target.value)} label="Login" variant="outlined" type='name' />
      <TextField  required  defaultValue={email}  onChange={(event)=>setEmail(event.target.value)} label="Email" variant="outlined" type='email' />

      <TextField  required  defaultValue={password}  onChange={(event)=>setPassword(event.target.value)} label="Password" variant="outlined" type='password' />
   
      <Fab variant="extended" color="secondary" type="button" onClick={handleSubmit}>Login</Fab>
      <Typography align='center'  variant="caption" color='grey' mb={2}  >
     
      <Link href={`/registration`} sx={{textDecoration:'none', color:'grey', '&:hover':{color:'pink'}}}> Create account!</Link>

      </Typography>
    </Box> 
    </BoxInputs>
      </BoxContainer>
  )
}

export default Registration

