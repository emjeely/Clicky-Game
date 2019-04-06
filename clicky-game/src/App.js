import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from "./components/Header/index.js";
import Points from "./components/Points/index.js";
import Wrap from "./components/Wrap/index.js";
import Container from "./components/Container/container.js";
import data from "./images.json";


class App extends Component {
  state = {
    data,
    score: 0,
    maxScore: 0
};

shuffle = data =>{
   for(let i=data.length-1; i>0; i--){
       const j= Math.floor(Math.random() * (i+1))
       const temp = data[i];
       data[i] = data[j];
       data[j] = temp;
   }
   return data;
}

resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffle(resetData);
  };

handleCorrectGuess = newImages => {
    const { maxScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, maxScore);

    this.setState({
      data: this.shuffle(newImages),
      score: newScore,
      maxScore: newTopScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };



update = (id) => {
    let guessedCorrectly = false;
    const newImages = this.state.data.map(item => {
        const newItem = { ...item };
        if (newItem.id === id) {
            if (!newItem.clicked) {
              newItem.clicked = true;
              guessedCorrectly = true;
            }
          }
          return newItem;
    });
    guessedCorrectly? this.handleCorrectGuess(newImages): this.handleIncorrectGuess(newImages);

}


render() {
  return (
    <div className="container-fluid">
      <Header/>
        <Points 
          score={this.state.score}
          maxscore={this.state.maxScore}
        >
        {this.state.data.map(item => (
          <Wrap
            clicked={item.clicked}
            alt={item.id}
            id={item.id}
            key={item.id}
            src={process.env.PUBLIC_URL + item.image}
            image={item.image}
            update={this.update}
          />
        ))}
        </Points>
     
    </div>    
  )
}
}
export default App;