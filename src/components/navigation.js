import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/Home/Home';
import Post from '../pages/Post';
import PostDetail from '../pages/Post/PostDetail';
import Login from './Login/Login';
import Nav from './Nav/Nav';
function Navigation() {
  return (
    <Router>
        <Nav/>       
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/post/detail/:id">
            <PostDetail />
          </Route>


          <Route  exact path="/post">
            <Post />
          </Route>

      </Switch>   
    </Router>
  )
}

export default Navigation