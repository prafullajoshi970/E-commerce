import React from 'react'
import Nav from './Nav'
import './Contact.css'
import {Heading, Input,Button } from '@chakra-ui/react'
const Cantact = () => {
  return (
    <div>
        <Nav></Nav>
        <div className="contact-us-container">
      <Heading>Contact Us</Heading>
      <form className="contact-form">
        <div className="form-group">
        <Input placeholder='Name'></Input>
        </div>
        <div className="form-group">
        <Input placeholder='Email'></Input>
        </div>
        <div className="form-group">
          <textarea id="message" placeholder="Enter your message"></textarea>
        </div>
        <Button colorScheme='teal' variant='outline' type='submit'>Send Message</Button>
      </form>
    </div>
    </div>
  )
}

export default Cantact