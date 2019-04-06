import React from "react";
import "./styles.css";

const Points = props => {
  return (
    <div>
    <h1 className = "text-center score">
      Score = {props.score}  |  Max Score ={props.maxscore}
    </h1>
    {props.children}
    
    </div>
  )
  
};

export default Points;