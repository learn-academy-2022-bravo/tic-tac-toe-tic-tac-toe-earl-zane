import React, { Component } from 'react';
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      player1 : '❌',
    }
  }

click = (index) =>{
 let{squares, player1}=this.state
 if (squares[index] === null) {
   squares[index] = player1
   this.setState({squares: squares, player1: player1 === "❌"?"⭕️":"❌"})
 }

}
  //   fillP1 = (item) => {
  //   this.setState({p1: [...this.state.p1, item]})
  // }
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
