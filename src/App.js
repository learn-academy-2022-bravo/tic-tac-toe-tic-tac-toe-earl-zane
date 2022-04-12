import React, { Component } from 'react';
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      p1 : [],
      p2 : [],
    }
  }

click = (index) =>{
 let{squares}=this.state
 squares[index] ="X"
  this.setState({
    squares:squares
  })
}
    fillP1 = (item) => {
    this.setState({p1: [...this.state.p1, item]})
  } 
  render() {
    console.log(this.state.squares);
    return (
      <>
        <>
        <h1>Tic Tac Toe</h1>

        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return(
              <Square
                key={index}
                value={value}
                index={index}
                player1={this.state.p1}
                click={this.click}
              />
            )
          })}
        </div>
      </>
      </>
    );
  }
}

export default App;

