import React, { Component } from 'react';
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      player1 : '❌',
      winner : null
    }
  }

click = (index) =>{
 let{squares, player1}=this.state
 if (squares[index] === null) {
   squares[index] = player1
   this.setState({squares: squares, player1: player1 === "❌"?"⭕️":"❌"})
 }
}

winning = () => {
  const winningGame= [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

  winningGame.forEach(value => {
    const [one, two, three] = value
    const {squares, winner} = this.state

    if (squares[one] === '❌' && squares[two] === '❌' && squares[three] === '❌') {
      this.setState({ winner: '❌' })
    } else if (squares[one] === "⭕️" && squares[two] === "⭕️" && squares[three] === "⭕️") {
      this.setState({ winner: "⭕️" })
    }

  });
}

resetGame = () => {
  this.setState ({
    squares: [null, null, null, null, null, null, null, null, null],
    player1 : '❌',
    winner : null
  })
}




  render() {
    const tieGame = this.state.squares.every(value => value !== null)
    console.log(this.state.squares);
    return (
      <>
        <>
        <h1>Tic Tac Toe</h1>
        {this.state.winner && <h4>{this.state.winner} Wins </h4>}
        {(tieGame && !this.state.winner) && <h4>Tie</h4>}
        {(this.state.winner || tieGame) &&
          <div className = "button">
            <button onClick = {this.resetGame}>
                Reset the game
            </button>
          </div>
        }

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
