import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Techcse from "../../images/Technical.svg";
import design from "../../images/Design.svg";
import Management from '../../images/Management.svg';
// import Techece from "../../images/Group 75 (2).svg";
import Techece from "../../images/Group 93.svg";

import editorial from "../../images/Editorial.svg";
import "./carousel.css";
import { useEffect } from "react";

const Dashboard = () => {
  let token = "Bearer " + JSON.parse(localStorage.getItem("token")).jwt;
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
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
  const [data, setData] = useState([]);
  useEffect(() => {
    if(!localStorage.getItem("token")){
      alert("Please Log in first");
      window.location.replace('/login');
      return null;
    }
    fetch("https://recportal-iete.herokuapp.com/auth/testdone/", {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp.submitted);
        setData(resp.submitted);
      });
    });
  },[]);

  const domainArray = [
    {
      img: <img src={Techcse} className="card-img" alt="tech cse" />,
      title: "Tech CSE",
    },
    {
      img: <img src={Techece} className="card-img" alt="tech cse" />,
      title: "Tech ECE",
    },
    {
      img: <img src={Management} className="card-img" alt="tech cse" />,
      title: "Management",
    },
    {
      img: <img src={editorial} className="card-img" alt="tech cse" />,
      title: "Editorial",
    },
    {
      img: <img src={design} className="card-img" alt="tech cse" />,
      title: "Design",
    },
  ];

  if(data.length>0){
    const submittedArray=domainArray.filter(item => data.includes(item.title));
    return (
      <div className="Carousel-outer-div" id="dashboard">
      <h1 className="carousel-heading ">Tests Completed : {submittedArray.length}</h1>
        <Slider {...settings}>
          
          {submittedArray.map((item) => {
            
            return (
              <div className="card">
                <div className="circle-card">{item.img}</div>
                <p className="Domain-name">{item.title}</p>
              </div>
            );
          })}
          
        </Slider>
        {/* <h1 className='timeline-heading'>Timeline</h1>
        <HorizontalLinearStepper/> */}
      </div>
    );
  }
  else{
    return null;
  }
  // return null;
};

export default Dashboard;
