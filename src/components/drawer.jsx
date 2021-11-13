import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
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
import Info_C from '../images/info-green.svg';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "150px"
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
        return(<img src={HomeIcon} />);
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
    },
    {
      text: "Takequiz",
      icon: <img src={Todo} />,
      onClick: () => history.push("/Takequiz")
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

              {index!==0 ? <ListItemIcon >{icon}</ListItemIcon>: null}
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
