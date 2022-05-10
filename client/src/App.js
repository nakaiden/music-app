import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Welcome from './components/Welcome';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/welcome"><button>Welcome</button></Link>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/welcome/more-info">
            <Welcome />
            <p>This is more information about our site...</p>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
