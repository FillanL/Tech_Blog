import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'


import Nav from './Components/topNav'
import Footer from './Components/footer'
import Home from './Components/home'
import ArticleShow from './Components/showPages/articleShow';
import Category from './Container/category'
import './App.css';
import AdminDash from './Components/adminDash';

library.add(fab, faBars)

function App() {

  return (
    <div className="App">
      <Nav/>
        <div className="Container">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/article/:id" component={ArticleShow} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/Dash" component={AdminDash} />
          </Switch>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
