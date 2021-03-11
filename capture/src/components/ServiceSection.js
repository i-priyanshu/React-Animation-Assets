import React from "react";
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";

import Styled from "styled-components";
import { About, Description, Image } from "../styles";
import { scrollEffect } from "../animate";
import { useScroll } from "./useScroll";

const ServiceSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollEffect}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock" />
              <h3>teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="clock" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="clock" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="home 2" />
      </Image>
    </Services>
  );
};

const Services = Styled(About)`
h2 {
  padding-bottom: 5rem;
}
p {
  width: 70%;
  padding: 2rem 0rem 4rem 0rem;
}
`;

const Cards = Styled.div`
    display:flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
       justify-content: center; 
      }
`;
const Card = Styled.div`
flex-basis : 20rem;
.icon {
  display : flex;
  align-items: center;
  h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
  }
}
`;

export default ServiceSection;
