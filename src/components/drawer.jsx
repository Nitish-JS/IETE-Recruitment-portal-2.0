import React, { useState } from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
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
import Info_C from "../images/info_green.svg";
import { withRouter, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material";
import { Typography } from "@material-ui/core";
import { AppBar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@material-ui/icons";
import { Toolbar } from "@mui/material";
import { Box } from "@material-ui/core";
import Logout from "../images/ic_sharp-logout.svg";
import "../App.css";
const drawerWidth = 150;
const useStyles = makeStyles(() => ({
  drawer: {
    width: "150px",
  },
  selected: {},
}));

const Drawer = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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
    // {
    //   text: "info",
    //   icon: <img src={Info} />,
    //   onClick: () => history.push("/info"),
    //   ...(route === "/info" && { icon: <img src={Info_C} /> }),
    // },
    // {
    //   text: "Dashboard",
    //   icon: <img src={Wait} />,
    //   onClick: () => history.push("/dashboard"),
    //   ...(route === "/dashboard" && { icon: <img src={Wait_C} /> }),
    // },
    {
      text: "qa",
      icon: <img src={QA} />,
      onClick: () => history.push("/qa"),
      ...(route === "/qa" && { icon: <img src={QA_C} /> }),
    },
    {
      ...(localStorage.getItem('token')&& {text: "info",
        icon: <img src={Info} />,
        onClick: () => history.push("/info"),
        ...(route === "/info" && { icon: <img src={Info_C} /> }),} )
    },
    {
      ...(localStorage.getItem('token')&& {text: "logout",
        icon: <img src={Logout} />,
        onClick:  ()=> {
          history.push("/");
          localStorage.clear();
        },} )
    }
    // {
    //   text: "logout",
    //   icon: <img src={Todo} />,
    //   onClick: async (e) => {
    //     history.push("/");
    //     localStorage.clear();
    //   },
    // },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        className="Appbar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "rgba(77, 77, 77, 0.5)",
          
        }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MUIDrawer
        variant="temporary"
        // className={classes.drawer}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        id="Drawer"
        PaperProps={{
          sx: {
            backgroundColor: "black",
          },
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box" },
        }}
      >
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {index === 0 ? (
                  <ListItemIcon style={{ margin: "20px 0 175px 0" }}>
                    {icon}
                  </ListItemIcon>
                ) : null}
                {index !== 0 ? (
                  <ListItemIcon className="navbar-item" style={{ marginBottom: "25px"}}>
                    {icon}
                  </ListItemIcon>
                ) : null}
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
      <MUIDrawer
        
        id="Drawer"
        className={classes.drawer}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(77, 77, 77, 0.2)",
            width: "100px",
          },
        }}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box" },
        }}
      >
        <List class>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {index === 0 ? (
                  <ListItemIcon style={{ margin: "20px 0 175px 0" }}>
                    {icon}
                  </ListItemIcon>
                ) : null}
                {index !== 0 ? (
                  <ListItemIcon style={{ marginBottom: "25px" ,position:"relative" ,left:'15%'}}>
                    {icon}
                  </ListItemIcon>
                ) : null}
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
    </Box>
  );
};

export default withRouter(Drawer);

// import React, { useState } from "react";
// import {
//   Drawer as MUIDrawer,
//   ListItem,
//   List,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import HomeIcon_C from "../images/home-green.svg";
// import HomeIcon from "../images/home-grey.svg";
// import Logo_C from "../images/IETE_White_logo.png";
// import QA_C from "../images/QA-green.svg";
// import QA from "../images/QA-grey.svg";
// import Todo_C from "../images/todo-green.svg";
// import Todo from "../images/todo-grey.svg";
// import Wait from "../images/wait-grey.svg";
// import Wait_C from "../images/wait-green.svg";
// import Info from "../images/info-grey.svg";
// import Info_C from "../images/info_green.svg";
// import { withRouter, useLocation } from "react-router-dom";
// import { createTheme } from "@mui/material";

// const useStyles = makeStyles(() => ({
//   drawer: {
//     width: "150px",
//     "&$selected": {
//       backgroundColor: "red",
//       "&:hover": {
//         backgroundColor: "yellow",
//       },
//     },
//   },
//   selected: {},
// }));

// const Drawer = (props) => {
//   const { history } = props;
//   const location = useLocation();
//   let route = location.pathname;
//   // console.log(route);
//   const [click, setClick] = useState(false);
//   const classes = useStyles();
//   const itemsList = [
//     {
//       text: "Logo",
//       icon: <img src={Logo_C} />,
//       onClick: () => history.push("/"),
//     },

//     {
//       text: "Home",
//       icon: <img src={HomeIcon} />,
//       onClick: () => {
//         history.push("/");
//       },
//       ...(route === "/" && { icon: <img src={HomeIcon_C} /> }),
//     },
//     {
//       text: "info",
//       icon: <img src={Info} />,
//       onClick: () => history.push("/info"),
//       ...(route === "/info" && { icon: <img src={Info_C} /> }),
//     },
//     {
//       text: "Dashboard",
//       icon: <img src={Wait} />,
//       onClick: () => history.push("/dashboard"),
//       ...(route === "/dashboard" && { icon: <img src={Wait_C} /> }),
//     },
//     {
//       text: "QA",
//       icon: <img src={QA} />,
//       onClick: () => history.push("/QA"),
//       ...(route === "/QA" && { icon: <img src={QA_C} /> }),
//     },
//     {
//       text: "logout",
//       icon: <img src={Todo} />,
//       onClick: async (e) => {
//         history.push("/");
//         localStorage.clear();
//       },
//     },
//   ];

//   return (
//     <MUIDrawer
//       variant="permanent"
//       className={classes.drawer}
//       id="Drawer"
//       PaperProps={{
//         sx: {
//           backgroundColor: "rgba(77, 77, 77, 0.2)",
//         },
//       }}
//     >
//       <List class>
//         {itemsList.map((item, index) => {
//           const { text, icon, onClick } = item;          return (
//             <ListItem button key={text} onClick={onClick}>
//               {index === 0 ? (
//                 <ListItemIcon style={{ margin: "20px 0 100px 0" }}>
//                   {icon}
//                 </ListItemIcon>
//               ) : null}
//               {index !== 0 ? (
//                 <ListItemIcon style={{ marginBottom: "25px" }}>
//                   {icon}
//                 </ListItemIcon>
//               ) : null}
//             </ListItem>
//           );
//         })}
//       </List>
//     </MUIDrawer>
//   );
// };

// export default withRouter(Drawer);
