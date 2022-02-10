import React from "react";
import { Button } from "@mui/material";
import "./domain.css";
import Techcse from "../../images/Technical.svg";
import Design from "../../images/Design.svg";
import Management from '../../images/Management.svg';
// import Techece from "../../images/Group 75 (2).svg";
import Techece from "../../images/Group 75 (2).svg";
import Editorial from "../../images/Editorial.svg"


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

            <h1 >Tech CSE</h1>
            <p>
              A computer science domain in which candidates can develop various
              software oriented projects under the guidance of seniors and can
              excel in subfields such as Web Development by clearing their
              queries.
            </p>
            <Button
              className="Button"
              variant="contained"
              color="success"
              onClick={() => {
                localStorage.getItem("token") &&
                  localStorage.setItem("domain", 1);
              }}
              href="/ready"
            >
              Take test
            </Button>
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-description-right">
            <h1>Tech ECE</h1>
            <p>
              An electronics oriented domain in which candidates can build up
              their skills in the field of electronics and can get a chance to
              develop projects under the guidance of seniors.
            </p>
            <Button
              className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {
                localStorage.getItem("token") &&
                  localStorage.setItem("domain", 2);
              }}
              href="/ready"
            >
              Take Test
            </Button>
          </div>
          <div className="circle-card-left">
            <img src={Techece} className="circle-card-left-image" />
          </div>
        </div>
        <div className="domain-card">
          <div className="circle-card-left">
            <img src={Management} className="circle-card-left-image" />
          </div>
          <div className="domain-description-right">
            <h1>Management</h1>
            <p>
              A multifaced domain in which candidates can brush themselves up in
              various fields such as finance , sponsorship and much more which
              are responsible for the smooth functioning of any event.
            </p>
            <Button
              className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {
                localStorage.getItem("token") &&
                  localStorage.setItem("domain", 5);
              }}
              href="/ready"
            >
              Take Test
            </Button>
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-description-right">
            <h1>Design</h1>
            <p>
              A design oriented domain in which individuals can build up their
              design skills by designing various posters. They also get a chance
              to build up their UI/UX skills.
            </p>
            <Button
              className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {
                localStorage.getItem("token") &&
                  localStorage.setItem("domain", 4);
              }}
              href="/ready"
            >
              Take Test
            </Button>
          </div>
          <div className="circle-card-left">
            <img src={Design} className="circle-card-left-image" />
          </div>
        </div>
        <div className="domain-card">
          <div className="circle-card-left">
            <img src={Editorial} className="circle-card-left-image" />
          </div>
          <div className="domain-description-right">
            <h1>Editorial</h1>
            <p>
              A documentation domain in which candidates get a chance to
              showcase their skills by writing tech posts and captions for the
              chapter which improves their thinking capabilities.
            </p>
            <Button
              className="Button"
              variant="contained"
              //   color="success"
              onClick={() => {
                localStorage.getItem("token") &&
                  localStorage.setItem("domain", 3);
              }}
              href="/ready"
            >
              Take Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domain_page;
