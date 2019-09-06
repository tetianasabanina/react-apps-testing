import React from 'react';
import './Main.css';
import Box from '../Box/Box.js';

const clickHandler = () => {
    console.log("Terve!");
}
const Main = () => {
    return (
        <div className='main'>
           
                <h2>Main component</h2>
                
                <button onClick={clickHandler}>Click Me</button>
            
                <div>
                    <Box />
                    <Box />
                    <Box />
                </div>

        </div>
    );
}

export default Main;