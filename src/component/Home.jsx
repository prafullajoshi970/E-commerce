import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import electronics from "./images/electronics.jpg";
import mens from "./images/Mens.jpg";
import womens from "./images/womens.jpg";
import jwellery from "./images/Jwellery.jpg";
import "./Home.css";
import { Button } from "@chakra-ui/react";
const Home = () => {
  let history = useNavigate();
  const handleButtonClick = (category) => {
    history(`/Product/${category}`);
  };
  return (
    <div>
      <Nav> </Nav>
      <div className="imgdiv">
        <div className="div1">
          <img className="img1" src={electronics} alt=""></img>
          <Button colorScheme="teal" variant="outline" onClick={()=> handleButtonClick('electronics')}>
           Electronics
          </Button>
        </div>
        <div className="div1">
          {" "}
          <img className="img1" src={mens} alt=""></img>
          <Button colorScheme="teal" variant="outline" onClick={()=> handleButtonClick('men\'s clothing')}>
           Mens cloths
          </Button>
        </div>
        <div className="div1">
          {" "}
          <img className="img1" src={womens} alt=""></img>
          <Button colorScheme="teal" variant="outline" onClick={()=> handleButtonClick('women\'s clothing') }>
            Womens cloths
          </Button>
        </div>
        <div className="div1">
          {" "}
          <img className="img1" src={jwellery} alt=""></img>
          <Button colorScheme="teal" variant="outline" onClick={()=> handleButtonClick('jewelery') }>
            Jwellery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
