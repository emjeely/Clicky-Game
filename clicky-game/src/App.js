import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from "./components/Header";
import Points from "./components/Points";
import Wrap from "./components/Wrap";
import images from "./";


class App extends Component {
  state = {
    images,
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

handleCorrectGuess = newData => {
    const { maxScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, maxScore);

    this.setState({
      images: this.shuffle(newData),
      score: newScore,
      maxScore: newTopScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      images: this.resetData(data),
      score: 0
    });
  };



update = (id) => {
    let guessedCorrectly = false;
    const newImages = this.state.images.map(item => {
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
        />
      <div className="container-fluid">
                
        {this.state.images.map(item => (
          <Wrap
            clicked={item.clicked}
            id={item.id}
            image={item.image}
            update={this.update}
          />
        ))} 
             
        </div>
    </div>    
  )
}
}
export default App;