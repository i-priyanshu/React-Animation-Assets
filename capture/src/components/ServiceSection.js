import React from "react";
import clock from "../images/clock.svg";
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';
import home2 from '../images/home2.png';

const ServiceSection = () => {
  return (
    <div className="services">
      <div className="descriptipon">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
             <img src={clock} alt="clock" />
             <h3>Efficient</h3> 
             </div>
             <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
             <img src={teamwork} alt="clock" />
             <h3>teamwork</h3> 
             </div>
             <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
             <img src={money} alt="clock" />
             <h3>Affordable</h3> 
             </div>
             <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
             <img src={diaphragm} alt="clock" />
             <h3>Diaphragm</h3> 
             </div>
             <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
          <img src={home2} alt="home 2"/>
      </div>
    </div>
  );
};

export default ServiceSection;
