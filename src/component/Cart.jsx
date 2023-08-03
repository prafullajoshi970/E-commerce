import React,{useState} from 'react'
import Nav from './Nav'


import { Flex,Card, CardBody,Button,Image,Stack,Heading,Text} from '@chakra-ui/react'

const Cart = () => {
  const myCart = localStorage.getItem('myCart');
  const myCartdata = JSON.parse(myCart);
  const[cart,setcart]=useState(myCartdata);
if(cart===[]){
  localStorage.clear();
}
  const removeCartItem=(idx)=>{
    const newCart=[...cart];
      newCart.splice(idx,1); 
       setcart(newCart)
       localStorage.setItem('myCart', JSON.stringify(newCart))
  }
  const getTotalAmount = () => {
    return cart.reduce((total, item) =>total + item.price, 0);
  };


console.log(cart);
  return (

    <div>
        <Nav></Nav>

        {!cart?<h1 color='red'> No item in cart</h1>:<>
        {cart.length>0&&<>
          <Heading as='h2' size='l' m='5px'>
     Total Amout:  {Math.floor( getTotalAmount())} $
  </Heading>
     
{cart.map((ele)=>
    <div>
      <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    m='5px'
    h='230px'
    border={'1px solid'}
  >
    <Image
      objectFit='cover'
     h='200px'
      w='300px'
      mt='2px'
      src={ele.image}
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>{ele.title}</Heading>
  
        <Text py='2' fontSize={'10px'}>
         {ele.description}
        </Text>
        <Flex>
        <Text py='2' mt='3vh' color={'blue.600'}>
        ${ele.price}
        </Text>
    
  
     
        <Button variant='outline' colorScheme='blue' ml='10vw' mt='5vh' onClick={()=>removeCartItem()}>
          Remove From cart
        </Button>
        </Flex>
       
        </CardBody>
    </Stack>
  </Card>
    </div>
)}
</>}
        </>}

      
    </div>
  )
}

export default Cart