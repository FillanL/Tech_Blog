import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Nav from './Components/topNav'
import Footer from './Components/footer'
import Home from './Components/home'
import Explore from './Components/explore'
import ArticleShow from './Components/showPages/articleShow';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Nav/>
        <div className="Container">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/Explore" component={Explore} />
            <Route exact path="/article/:id" component={ArticleShow} />
            {/* <Route exact path="/" component={Home} /> */}
          </Switch>
        </div>
      <Footer/>
    </div>
    
  );
}

export default App;
