import React,{useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useDispatch} from 'react-redux'

import {getArticles} from './Service/articleService'

import Nav from './Components/topNav'
import Home from './Components/home'
import Footer from './Components/footer'
import ArticleShow from './Components/showPages/articleShow';
import Category from './Container/category'
import AdminDash from './Components/AdminComponents/adminDash';
import Errorpage from './Components/errorpage';
import './App.css';

library.add(fab, faBars)

function App() {
  const dispatch = useDispatch() 
  useEffect(() => {
      dispatch(getArticles())
  }, [dispatch])

  return (
    <div className="App">
      <Nav/>
        <div className="Container">
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/article/:id" component={ArticleShow} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/dash" component={AdminDash} />
            <Route exact path="*" component={Errorpage} />
          </Switch>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
