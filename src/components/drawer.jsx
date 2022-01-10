<<<<<<< HEAD
import React, { useState } from "react";
=======
import React,{useEffect} from "react";
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
<<<<<<< HEAD
  ListItemText,
=======
  ListItemText
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeIcon_C from "../images/home-green.svg";
import HomeIcon from "../images/home-grey.svg";
import Logo_C from "../images/IETE_White_logo.png";
import QA_C from "../images/QA-green.svg";
import QA from "../images/QA-grey.svg";
import Todo_C from "../images/todo-green.svg";
import Todo from "../images/todo-grey.svg";
import Wait from "../images/wait-grey.svg";
import Wait_C from "../images/wait-green.svg";
import Info from "../images/info-grey.svg";
<<<<<<< HEAD
import Info_C from "../images/info_green.svg";
import { withRouter, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material";

const useStyles = makeStyles(() => ({
  drawer: {
    width: "150px",
    "&$selected": {
      backgroundColor: "red",
      "&:hover": {
        backgroundColor: "yellow",
      },
    },
  },
  selected: {},
}));

const Drawer = (props) => {
  const { history } = props;
  const location = useLocation();
  let route = location.pathname;
  // console.log(route);
  const [click, setClick] = useState(false);
  const classes = useStyles();
  const itemsList = [
    {
      text: "Logo",
      icon: <img src={Logo_C} />,
      onClick: () => history.push("/"),
    },

    {
      text: "Home",
      icon: <img src={HomeIcon} />,
      onClick: () => {
        history.push("/");
      },
      ...(route === "/" && { icon: <img src={HomeIcon_C} /> }),
    },
    {
      text: "info",
      icon: <img src={Info} />,
      onClick: () => history.push("/info"),
      ...(route === "/info" && { icon: <img src={Info_C} /> }),
    },
    {
      text: "Dashboard",
      icon: <img src={Wait} />,
      onClick: () => history.push("/dashboard"),
      ...(route === "/dashboard" && { icon: <img src={Wait_C} /> }),
    },
    {
      text: "QA",
      icon: <img src={QA} />,
      onClick: () => history.push("/QA"),
      ...(route === "/QA" && { icon: <img src={QA_C} /> }),
=======
import Info_C from '../images/info-green.svg';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "150px",
  },
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [

    {
        text: "Logo",
      icon: <img src={Logo_C} />,
      onClick: () => (
        history.push("/")
      )
    },
    {
      text: "Home",
      icon: <img src={HomeIcon_C} />,
      onClick: () => {
        history.push("/")

      }
    },
    {
        text: "info",
        icon: <img src={Info} />,
        onClick: () => history.push("/info")
      },
      {
        text: "Dashboard",
        icon: <img src={Wait} />,
        onClick: () => history.push("/dashboard")
      },
    {
      text: "QA",
      icon: <img src={QA} />,
      onClick: () => history.push("/QA")
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
    },
    {
      text: "logout",
      icon: <img src={Todo} />,
      onClick: async (e) => {
<<<<<<< HEAD
        history.push("/");
        localStorage.clear();
      },
    },
  ];

  return (
    <MUIDrawer
      variant="permanent"
      className={classes.drawer}
      id="Drawer"
      PaperProps={{
        sx: {
          backgroundColor: "rgba(77, 77, 77, 0.2)",
        },
      }}
    >
      <List class>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;          return (
            <ListItem button key={text} onClick={onClick}>
              {index === 0 ? (
                <ListItemIcon style={{ margin: "20px 0 100px 0" }}>
                  {icon}
                </ListItemIcon>
              ) : null}
              {index !== 0 ? (
                <ListItemIcon style={{ marginBottom: "25px" }}>
                  {icon}
                </ListItemIcon>
              ) : null}
=======
        history.push("/")
        localStorage.clear();
        
      }
    }
  ];
  
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
            {index===0 ? <ListItemIcon style={{marginBottom: "100px"}}>{icon}</ListItemIcon>:null}

              {index!==0 ? <ListItemIcon  >{icon}</ListItemIcon>: null}
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
