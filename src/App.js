import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './Components/home'
import Explore from './Components/explore'
import Nav from './Components/topNav'
import Footer from './Components/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Explore" component={Explore} />
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/" component={Home} /> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
