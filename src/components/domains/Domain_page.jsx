<<<<<<< HEAD
import React from "react";
import { Button } from "@mui/material";
import "./domain.css";
import Techcse from "../../images/4804443.jpg";

function Domain_page() {
  return (
    <div className="domain-page">
      <div className="domain-outer-div">
        <h1 className="domain-main-heading"> Domains</h1>
        <div className="domain-card">
          <div className="circle-card-left">
            <img src={Techcse} className="circle-card-left-image" />
          </div>
          <div className="domain-description-right">
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laborum ratione, ut illo debitis saepe excepturi et nostrum
              ducimus distinctio officiis? Deleniti, culpa nobis error quae illo
              corrupti id porro?
            </p>
            <Button 
              className="Button"
              variant="contained"
              color="success"
              onClick={() => {
                localStorage.getItem('token') && localStorage.setItem("domain", 1);

              }}
              href="/ready"
            >
              Tech CSE
            </Button>
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-description-right">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laborum ratione, ut illo debitis saepe excepturi et nostrum
              ducimus distinctio officiis? Deleniti, culpa nobis error quae illo
              corrupti id porro?
            </p>
            <Button
            className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {
                localStorage.getItem('token') && localStorage.setItem("domain", 2);
              }}
              href="/ready"
            >
              Tech CSE
            </Button>
          </div>
          <div className="circle-card-left">
            <img src={Techcse} className="circle-card-left-image" />
          </div>
        </div>
        <div className="domain-card">
          <div className="circle-card-left">
            <img src={Techcse} className="circle-card-left-image" />
          </div>
          <div className="domain-description-right">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laborum ratione, ut illo debitis saepe excepturi et nostrum
              ducimus distinctio officiis? Deleniti, culpa nobis error quae illo
              corrupti id porro?
            </p>
            <Button
            className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {
                localStorage.getItem('token') && localStorage.setItem("domain", 3);
              }}
              href="/ready"
            >
              Tech CSE
            </Button>
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-description-right">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laborum ratione, ut illo debitis saepe excepturi et nostrum
              ducimus distinctio officiis? Deleniti, culpa nobis error quae illo
              corrupti id porro?
            </p>
            <Button
            className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {
                localStorage.getItem('token') && localStorage.setItem("domain", 4);
              }}
              href="/ready"
            >
              Tech CSE
            </Button>
          </div>
          <div className="circle-card-left">
            <img src={Techcse} className="circle-card-left-image" />
          </div>
        </div>
        <div className="domain-card">
          <div className="circle-card-left">
            <img src={Techcse} className="circle-card-left-image" />
          </div>
          <div className="domain-description-right">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laborum ratione, ut illo debitis saepe excepturi et nostrum
              ducimus distinctio officiis? Deleniti, culpa nobis error quae illo
              corrupti id porro?
            </p>
            <Button
            className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {

                localStorage.getItem('token') && localStorage.setItem("domain", 5);
              }}
              href="/ready"
            >
              Tech CSE
            </Button>
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-description-right">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laborum ratione, ut illo debitis saepe excepturi et nostrum
              ducimus distinctio officiis? Deleniti, culpa nobis error quae illo
              corrupti id porro?
            </p>
            <Button
            className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {
                localStorage.getItem('token') && localStorage.setItem("domain", 6);
              }}
              href="/ready"
            >
              Tech CSE
            </Button>
          </div>
          <div className="circle-card-left">
            <img src={Techcse} className="circle-card-left-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domain_page;
=======
import React from 'react'
import './domain.css';
import Techcse from '../../images/4804443.jpg'

function Domain_page() {
    return (
        <div className="domain-page">
        <div className='domain-outer-div'>
            <h1 className='domain-main-heading'> Domains</h1>
            <div className="domain-card">
                <div className="circle-card-left">
                    {/* <img src={Techcse} className='circle-card-left-image' /> */}
                </div>
                <div className="domain-description-right">
                    <p>.</p>
                </div>
            </div>
            <div className="domain-card">
                <div className="domain-description-right">
                    <p>.</p>
                </div>
                <div className="circle-card-left">
                    {/* <img src={Techcse} className='circle-card-left-image' /> */}
                </div>
            </div>
            <div className="domain-card">
                <div className="circle-card-left">
                    {/* <img src={Techcse} className='circle-card-left-image' /> */}
                </div>
                <div className="domain-description-right">
                    <p>.</p>
                </div>
            </div>
            <div className="domain-card">
                <div className="domain-description-right">
                    <p>.</p>
                </div>
                <div className="circle-card-left">
                    {/* <img src={Techcse} className='circle-card-left-image' /> */}
                </div>
            </div>
            <div className="domain-card">
                <div className="circle-card-left">
                    {/* <img src={Techcse} className='circle-card-left-image' /> */}
                </div>
                <div className="domain-description-right">
                    <p>.</p>
                </div>
            </div>
            <div className="domain-card">
                <div className="domain-description-right">
                    <p>.</p>
                </div>
                <div className="circle-card-left">
                    {/* <img src={Techcse} className='circle-card-left-image' /> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Domain_page
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
