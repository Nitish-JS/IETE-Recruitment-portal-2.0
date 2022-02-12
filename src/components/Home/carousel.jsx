import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Techcse from '../../images/4804443.jpg'
// import Techece from "../../images/4968074.jpg";
import Techece from "../../images/Group 93.svg";

import Techcse from "../../images/Technical.svg";
import Design from "../../images/Design.svg";
import Management from "../../images/Management.svg";
// import Techece from "../../images/23810.jpg";
import Editorial from "../../images/Editorial.svg";
// import Techece from "../../images/Group 75 (2).svg";

import "./carousel.css";
import HorizontalLinearStepper from "./Timeline";

const Carousel_domain = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Carousel-outer-div">
      <h1 className="carousel-heading">Domains</h1>
      <Slider {...settings}>
        <div className="card">
          <div className="circle-card">
            <img src={Techcse} className="card-img" alt="tech cse" />
          </div>

          <p className="Domain-name">Tech CSE</p>
        </div>
        <div>
          <img src={Techece} className="card-img" alt="tech cse" />
          <p className="Domain-name">Tech ECE</p>
        </div>
        <div className="card">
          <img src={Management} className="card-img" alt="tech cse" />
          <p className="Domain-name">Management</p>
        </div>
        <div className="card">
          <img src={Design} className="card-img" alt="tech cse" />
          <p className="Domain-name">Design</p>
        </div>

        <div className="card">
          <img src={Editorial} className="card-img" alt="tech cse" />
          <p className="Domain-name">Editorial</p>
        </div>

        {/* <div className='card'>
          <img src={Techcse}   className='card-img' alt="tech cse" />
        </div>
        <div className='card'>
          <img   className='card-img' src={Techcse} alt="tech cse" />
          <p className='Domain-name' >Tech Cse</p>
        </div>
        <div className='card'>
          
          <img  className='card-img'src={Techcse} alt="tech cse"  />
          <p className='Domain-name' >Tech Cse</p>
        </div> */}
      </Slider>
      {/* <h1 className='timeline-heading'>Timeline</h1>
      <HorizontalLinearStepper/> */}
    </div>
  );
};

export default Carousel_domain;
