import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['🫧', 0, 0, 0, 0, 0, 0, 0, 0],
      p1 : [],
      p2 : [],
    }
  }

  fillP1 = (item) => {
    this.setState({p1: [...this.state.p1, item]})
  }
}


  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>

        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return(
              <Square
                key={index}
                value={value}
                index={index}
                handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
