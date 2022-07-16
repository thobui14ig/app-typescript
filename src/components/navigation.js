import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNhaHang from '../pages/AppNhaHang';
import Home from '../pages/Home/Home';
import Music from '../pages/Music';
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

          <Route path="/music">
            <Music />
          </Route>
          <Route path="/appnhahang">
            <AppNhaHang />
          </Route>

      </Switch>   
    </Router>
  )
}

export default Navigation