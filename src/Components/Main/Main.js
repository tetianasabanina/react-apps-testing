import React from 'react';
import './Main.css';

const clickHandler = () => {
    console.log("Terve!");
}
function Main(props) {
    return (
        <div className='main'>
           
                <h2>{props.maintext}</h2>
                <button onClick={clickHandler}>Click Me</button>
            
        </div>
    );
}

export default Main;