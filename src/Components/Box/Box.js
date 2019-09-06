import React from 'react';
import './Box.css';

const Box = (props) => {
    return (
    <div className="box"> 
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Title: {props.title}</p>
    </div>
    );
}
export default Box;