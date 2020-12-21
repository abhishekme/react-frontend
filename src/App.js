import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Login from './components/Login';
import {RequireAuth, LessAuth} from './components/Main'

class App extends Component {
  render() { 
    return (
      
        <Router>
          <Route path='/' component={Main} />
          <LessAuth>
            <Route path="/login" component={Login} />
            <Redirect from='*' to='/login' />
        </LessAuth>
        </Router>
    )
  }
}

export default App

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
