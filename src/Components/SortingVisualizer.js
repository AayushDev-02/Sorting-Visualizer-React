import React, { Component } from 'react'

export class SortingVisualizer extends Component {

    constructor(props){
        super(props);

        this.state = {
            array: []
        }
    }

    componentDidMount(){

    }
  render() {

    // const {array} = this.state; 
    const array = [4,3,2,5,1];
    
    return (
      <div>
        {array.map((value, index) => (
            <div key={index} className={`h-[${value}px] w-[2px] inline-block mx-1`}>
            </div>
        ))}

        <button onClick={() => this.resetArray()}></button>
      </div>
    )
  }
}

export default SortingVisualizer
