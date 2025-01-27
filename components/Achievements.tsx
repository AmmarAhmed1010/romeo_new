"use client"
import React from 'react';
import styled from 'styled-components';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,  offset: 50 });
    
}, []);


  return (
 <>
   <h1 id='achievements' className='text-yellow-100'>Achievements</h1>
   <div className='grid grid-cols-1 gap-6 md:grid-cols-3 '>
     <StyledWrapper className='w-full'>
      <div  data-aos="fade-up-right" className="outer">
        <div className="dot" />
        <div className="card">
          <div className="ray" />
          <div className="text">100 Million</div>
          <div>Generated Subscribers</div>
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </StyledWrapper>
       <StyledWrapper className='w-full'>
       <div data-aos="fade-up-right" className="outer">
         <div className="dot" />
         <div className="card">
           <div className="ray" />
           <div className="text">1.5 Billion </div>
           <div>Thumbnail Clicks</div>
           <div className="line topl" />
           <div className="line leftl" />
           <div className="line bottoml" />
           <div className="line rightl" />
         </div>
       </div>
     </StyledWrapper>
        <StyledWrapper className='w-full'>
        <div data-aos="fade-up-right" className="outer">
          <div className="dot" />
          <div className="card">
            <div className="ray" />
            <div className="text">5 Hundred </div>
            <div>Happy Customers</div>
            <div className="line topl" />
            <div className="line leftl" />
            <div className="line bottoml" />
            <div className="line rightl" />
          </div>
        </div>
      </StyledWrapper>
   </div>
 </>
  );
}

const StyledWrapper = styled.div`
  .outer {
    height: 190px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
     background-image: linear-gradient(
      0deg,
      hsl(189, 92%, 58%),
      hsl(189, 99%, 26%) 100%
    );
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 230px at 0% 0%, #32D9F6, #0c0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
  }
  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }

  .card .text {
    font-weight: bolder;
    font-size: 3rem;
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
    color: transparent;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }
  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  .bottoml {
    bottom: 10%;
  }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }`;

export default Achievements;
