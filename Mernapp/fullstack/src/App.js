import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
//import './App.css';

import {Button} from 'react-bootstrap';
import CreateTodo from "./Components/Create";
import EditTodo from "./Components/Edit";
import TodosList from "./Components/List";
import logo from "./logo.svg";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://medium.com/@s_eschweiler/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1-d8d701c2995" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit/:id" className="nav-link">Edit Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
} 
export default App;
