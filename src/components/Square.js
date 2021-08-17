import React, { Component } from "react";
import "./square.css";

function Square(props) {
  return (
    <button className='square' onClick={props.whenClicked}>
      {props.value}
    </button>
  );
}

export default Square;
