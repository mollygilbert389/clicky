import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className = "game" className ="navbar-brand game" href="/">Play Memory Game</a>
        <div className = "mr-auto">

        </div>
        <h3 className="navbar-brand justify-content-center">
            {props.message}
          </h3>
        <div className = "navbar-brand justify-content-end">
          <h3 className = "score">
            Score: {props.score} | Top Score: {props.topscore}
          </h3>
        </div>
    </nav>
    </div>
  )
};

export default Navbar;