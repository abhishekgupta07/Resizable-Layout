import { height } from '@mui/system'
import React, { Component } from 'react'
import './style.css'
export class Resizablelayout extends Component {
  render() {
    const sizes = [
      {h:100, w:40},
      {h:60, w:60},
      {h:40, w:60}
    ]

    return (
      <div>Resizablelayout
      
      {sizes.map((size) => (
          <div className= {`divItem-${height}`}>
            grid: {size.h}
            </div> 
            ))}
      
      
      </div>
    )
  }
}

export default Resizablelayout