import React, {Component} from 'react';
import './Main.css';
import Box from '../Box/Box';

class Main extends Component {

    state = {
        persons: [ 
            {name: "Mari", title: "Designer", age: 30},
            {name: "Moira", title: "Technolog", age: 38},
            {name: "Petr", title: "Haker", age: 25},
        ]
    }
    clickHandler = () => {
        console.log('wow');
    }
    
      render () {
        return (
            <div className='Main'>
        
                <button onClick={this.clickHandler}>Click Me</button>
            
                <div>
                    <Box />
                    <Box />
                    <Box />
                </div>

            </div>
        );
    }
}

export default Main;