import {useState} from 'react'
import * as React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav'
import "./Product.css"
import { useDispatch, useSelector } from "react-redux";
import ActionCreator from "../Redux/Action";
import { Card,Flex, CardBody, CardFooter,Button,ButtonGroup,Image,Stack,Divider,Text} from '@chakra-ui/react'

const Product = () => {
    // const[data,setData]=useState([]);
    const[cart,setCart]=useState([])
    
  const dispatch = useDispatch();
    const {category}=useParams('electronics');
    console.log(category)
    
    useEffect(()=>{
        
            fetch(`https://fakestoreapi.com/products/category/${category}`).then
            ((resp)=>resp.json()).then
            ((data)=>dispatch(ActionCreator(data)))
        
           
    },[dispatch,category])
    let productdata = useSelector((storeData) => {
      return storeData.product;
    });
   
    // console.log(data)
    const addToCart = (product) => {
   setCart([...cart, product]);
 
  alert(`one ${product.category} item added to cart`)
  };
  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(cart));
  }, [cart]);
  console.log(cart)


  return (
    <div>
        <Nav></Nav>
        <div className='cards'>
        {productdata.length>0&&<>
       {productdata.map((ele,idx)=>
        <div key={idx}>
        <Card w='28vw' bg={'rgb(137, 162, 154)'} m='5'>
   <CardBody>
     <Image
       src={ele.image}
       alt='Green double couch with wooden legs'
       borderRadius='lg'
       h='30vh'
       w='35vw'
     />
     <Stack mt='6' spacing='0'>
       <Text fontSize='sm' fontWeight={'bold'} w='26vw'>{ele.title}</Text>
      <Flex> <Text color='blue.600' fontSize='2xl'>
        $ {ele.price}
       </Text>
       <Text ml='10' mt='2' color={'white'}>{ele.rating.rate}</Text></Flex>
      
     </Stack>
   </CardBody>
   <Divider />
   <CardFooter>
     <ButtonGroup spacing='2'>
       <Button variant='solid' colorScheme='blue' onClick={()=>{alert('Product is out of stock')}}>
         Buy now
       </Button>
       <Button variant='ghost' colorScheme='blue' onClick={()=>addToCart(ele)}>
         Add to cart
       </Button>
     </ButtonGroup>
   </CardFooter>
 </Card>
        </div>
 
       )}</>}
        </div>
      
      
    </div>
  )
}

export default Product