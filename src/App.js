import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import NavbarR from './components/NavbarR';
import Home from './components/Home'
import { useState } from 'react';

const localToken = JSON.parse(localStorage.getItem('token'))?.token || '';

function App() {
  const [token, setToken] = useState(localToken)

  const logOut = () => {
    localStorage.removeItem('token');
    setToken('');
  }

  return (
    <Router>
      <NavbarR token={token} logout={logOut} />
      <Switch>
        <Route path="/" exact>
          <Home token={token} />
        </Route>
        <Route path="/login" exact>
          <Login setToken={setToken} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
