import React from "react";
import "./style.css";

const Wrap = props => {

  return (
    <div className = "container-fluid main">
      <div className = "img-container">
      <img className = "imgclass" alt = "not" src = {props.image} onClick = {() => props.update(props.id)}/>

      </div>
      
    </div>
  )
}

export default Wrap;