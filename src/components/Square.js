import React, { Component } from 'react'



class Square extends Component{

  handleClick = () => {
    this.props.handleGamePlay(this.props.index)
  }

  render(){
    return(
      <>
        <div className="square" onClick={() => this.props.fillPlate(value)}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
