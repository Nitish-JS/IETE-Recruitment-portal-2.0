import React, { Component } from 'react';
import '../style/Navbar.css';
import Home from "../images/home-grey.svg";
import Info from "../images/info-grey.svg";
import QA from "../images/QA-grey.svg";
import Todo from "../images/todo-grey.svg";
import Wait from "../images/wait-grey.svg";
import Logo from '../images/IETE_White_Logo.svg';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {

        const NavStyle={
            color:"black"
        }

        // const NavbarStyle={
        //     background: "black"
        // }

        return (
            <nav >
                <img src={Logo} alt="Not Available" />
                <ul className="nav-links">
                    <Link style={NavStyle} to="/home">
                        <li>
                            <img src={Home} alt="" />
                        </li>
                    </Link>
                    <Link style={NavStyle} to="/info">
                        <li>
                        <img src={Info} alt="" />
                        </li>
                    </Link>
                    <Link style={NavStyle} to="/wait">
                        <li>
                        <img src={Wait} alt="" />
                        </li>
                    </Link>
                    <Link style={NavStyle} to="qa">
                        <li>
                        <img src={QA} alt="" />
                        </li>
                    </Link>
                    <Link style={NavStyle} to="todo">
                        <li>
                        <img src={Todo} alt="" />
                        </li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar
