import React, {Component} from 'react';
import './Main.css';
import Box from '../Box/Box';

class Main extends Component {

    state = {
        persons: [ 
            {name: "Mari", title: "Web Developer", age: 30},
            {name: "Moira", title: "Technolog", age: 38},
            {name: "Petr", title: "Haker", age: 25}
        ]
    }
    clickHandler = () => {
        console.log('wow');
        this.setState ( {
            persons: [ 
                {name: "Sari", title: "Web Developer", age: 30},
                {name: "Mila", title: "Technolog", age: 38},
                {name: "Kate", title: "Haker", age: 25}
            ]
        })
    }
    
      render () {
        return (
            <div className='main'>
        
                <button onClick={this.clickHandler}>Click Me</button>
                
                <div>
                <Box name={this.state.persons[0].name}
                title={this.state.persons[0].title}
                age={this.state.persons[0].age} />
                
                <Box name={this.state.persons[1].name}
                title={this.state.persons[1].title}
                age={this.state.persons[1].age} />
                
                <Box name={this.state.persons[2].name}
                title={this.state.persons[2].title}
                age={this.state.persons[2].age} />
                </div>

            </div>
        );
    }
}

export default Main;