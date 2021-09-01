import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import NavbarR from './components/NavbarR';
import Home from './components/Home'


function App() {
  return (
    <Router>
      <NavbarR />
      <Switch>
        <Route>
          <Login />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
