
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";

function App() {
  return(

    <Router>
        <Nav/>       
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route  path="/">
            <Home />
          </Route>

      </Switch>   
    </Router>
  )

}

export default App;