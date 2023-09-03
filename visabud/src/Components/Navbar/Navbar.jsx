import React from "react";
// import { Container, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/VisaBud.png';
import "./Navbar.css"

import {
  BrowserRouter,
  Link,
  Routes,
  Navigate,
  Router,
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar row">
      <div className="row">
        <div className="logo col">
          <img src={logo} alt="VisaBud logo" srcSet="" />
        </div>
        <div className="features col">
          <button type="button" className="btn col req-btn">About Us</button>
          <button type="button" className="btn col chat-btn">Start Chatting</button>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
