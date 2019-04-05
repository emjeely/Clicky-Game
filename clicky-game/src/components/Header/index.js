import React from "react";
import "./style.css";

const Header = () => {

  return (
    <div className = "jumbotron">
      <div className = "row">
        <div className = "col-6">
          <img src = "https://media.giphy.com/media/d8SMqAtm3D9bYfOtcs/giphy.gif" alt = "disney" />
        </div>
        <div className = "col-6">
          <div className = "header">
            <h1 id = "head">CLICKY GAME</h1>
            <br></br>
            <h3 id = "instructions">click on an image to earn points, but don't click on any more than once!!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;