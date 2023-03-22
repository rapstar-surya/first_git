import React from 'react'
import Style from './Board.module.css'
export default function Square(props) {
  return (
    <div 
    onClick={props.onClick}
    className={Style.square}>
      <h5>{props.value}</h5>
    </div>
  )
}
