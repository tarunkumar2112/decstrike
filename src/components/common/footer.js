import React from 'react'
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import MyComponent from "../common/slide";

const Footer = () => {
  return (
    <>
      <Container id='foot'className='p-3' fluid>
       <Marquee>
        <MyComponent />
       </Marquee>
      </Container>
    </>
  )
};
export default Footer;