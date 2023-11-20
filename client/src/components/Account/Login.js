import React,{useState} from 'react'
import {Box,Button,TextField,Typography,styled} from '@mui/material';
// import {AP} from '../service/api'
// import {AP} from '../service/api';
import axios from 'axios';

const Component=styled(Box)`
width:400px;
margin:auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;
const Image=styled('img')`
    width: 100px;
    margin:auto;
    display:flex;
    padding:50px 0 0;
`
// })
const Wrapper= styled(Box)`
padding:25px 35px;
display:flex;
flex-direction:column;
flex:1;
& >div,& > button{
    margin-top:20px;
}

`;
const LoginButton=styled(Button)`
// text-transform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:2px;
`
const SignupButton=styled(Button)`
// text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow: 0 2px 2px 0 rgb(0 0 0/20%); 
`
const Error = styled(Typography)`
font-size: 10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight;600;
`

const loginInitial={
  username: '',
    password:''
}
const signupInitial={
    name: '',
    username: '',
    password:''
};




const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
const[account,toggleAccount] = useState('login');
const[signup,setSignup]=useState(signupInitial);
const[login,setLogin]=useState(loginInitial)
const[error,showError]=useState('')

const onInput=(e)=>{
    setSignup({...signup,[e.target.name]: e.target.value});
}
const signupUser = async() => {

  // let response= await AP.userSignup(signup);
  const url = "http://localhost:9000/signup";
  const response= await axios.post(url,signup);
  console.log(response);
  
  if(response.isSuccess){
    
    showError('');
    setSignup(signupInitial);
    toggleAccount('login');
  }
  else{ 
      showError('Something went wrong!Please try again');
  }
}
const onValueChange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value})
}
const loginUser=async()=>{
  const url = "http://localhost:9000/login";
  const response= await axios.post(url,login);
  console.log(response);
  if(response.isSuccess){
    
    showError('');
    
  }
  else{ 
      showError('Something went wrong!Please try again');
  }
}
const toggleSignup=()=>{
  account==='signup'? toggleAccount('login'): toggleAccount('signup');
}
  return (
    
    <Component> 
        <Box>
        <Image src={imageURL}/>{
account==='login'?
        <Wrapper>
        <TextField variant="standard" value={login.username} onChange={(e)=>onValueChange(e)}  name="username" label="Enter Username"></TextField>
        <TextField variant="standard" value={login.password} onChange={(e)=>onValueChange(e)}  name="password" label="Enter Password"></TextField>
        {/* { error && <Typography>{error}</Typography> } */}
        { error && <Error>{error}</Error> }
        <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
        <SignupButton onClick={()=>toggleSignup()}>Create an account</SignupButton>
        </Wrapper>
        :
        <Wrapper>
        <TextField variant="standard" label="Enter Name" onChange={(e)=> onInput(e)} name='name'></TextField>
        <TextField variant="standard" label="Enter username" onChange={(e)=> onInput(e)} name='username'></TextField>
        <TextField variant="standard" label="Enter password" onChange={(e)=> onInput(e)} name='password'></TextField>
     
        <SignupButton onClick={()=>signupUser()}>Signup</SignupButton>
        <LoginButton variant="contained" onClick={()=>toggleSignup()}>Already have an account</LoginButton>
        </Wrapper>
}
        
         </Box>
    </Component>
  )
}
export default Login;
