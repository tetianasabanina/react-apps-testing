 // class-based component
// import React from 'react'; // function-based component
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import React, {Component} from 'react';
// class-based component
class App extends Component {
  state = {
    counter: 0
  };
  
  timesClicked = (event) => {
    this.setState({counter: this.state.counter+1});
  }


  render () {
    return (
      <div>
        <div>
          <p> {this.state.counter} </p>
          <button onClick={this.timesClicked}>Try it!</button>
        </div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

// function-based component
/*const App = () => {
  
  const now = new Date();
  const lesson = "React";
  const a = 10;
  const b = 5;
  const c = ' cars ';
  const name = 'Tanja';

  return (
    <div>
      <Router>
        
        {/*<div><p>Today is {now.toString()}</p></div>
        <div><h2>And we have {lesson} lesson</h2></div>
        <p>{a} plus {b} plus {c} is { a + b + c } </p>
        <p> but {c} plus {a} plus {b} is { c + a + b } </p>
  
        <Header title={name} text = {now.toString()} />
        <Header />
        <Switch>
          <Main />
          
          {/*<Route path="/" exact component={Main}></Route>
          <Route path="/" exact component={Button}></Route>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}
*/

export default App;
