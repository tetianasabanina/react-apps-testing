import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header title="This is my header from props"
        text = "Wow, now we actually can make it!" />
        <Switch>
          <Main maintext="I am Main component" />
          
     {/*     <Route path="/" exact component={Main}></Route>
          <Route path="/" exact component={Button}></Route>*/}
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
