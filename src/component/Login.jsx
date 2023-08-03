import React,{useState} from 'react';
import  {useNavigate}  from 'react-router-dom';
import "./Login.css"
import {Box,Heading, Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'

const Login = () => {
  const navigate=useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [data,setData]=useState([])
    const[Inp,setInp]=useState({userName:'',password:''})

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setInp((prevData) => ({ ...prevData, [name]: value }));
     }
     console.log(data)
     const handleSubmit=(e)=>{
      e.preventDefault();
      setData((prevList)=>([...prevList,Inp]));
     
      
  }

  const handleCheck=()=>{
    if(Inp.userName==='admin'&& Inp.password ==='admin'){
      navigate('/Home')
    }
    else {
      alert('enter proper credentials')
    }
  }
  console.log(data.userName && data.password)
  console.log(Inp)

  

        

  return (
    <Box className='mainlogin'>
      
     <Box className='Loginform'>
     
     <form onSubmit={handleSubmit }>
     <Heading>Login</Heading> <br></br>
        <Input variant='outline' placeholder='UserName'  name='userName' value={data.value} onChange={handleChange} /><br></br><br></br>
            <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        name='password' value={data.value} onChange={handleChange}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup><br></br>
    <Button colorScheme='teal' variant='outline' type='submit' onClick={handleCheck}>
Login 
 </Button>
 <p>username=admin password=admin</p>
        </form>
     </Box>
     <Box w={''} >
        <img 
        style={{height:'100vh' , width:'50vw',borderRadius:'0px 10px 10px 0px'}} src={'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600'} alt=''></img>
     </Box>
    
       
    </Box>
  )
}

export default Login