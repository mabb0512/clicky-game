import React from "react";
import "./NavBar.css";

const NavBar = props =>  <nav className="navbar navbar-default navbar-fixed-top">
<ul>
 <li className="align-left">Clicky Game</li>
 <li className="align-right">Score: {props.score}</li>
</ul>
</nav>;

export default NavBar;