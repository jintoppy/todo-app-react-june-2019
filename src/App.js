import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Todo from './Todo';
import AddTodo from './AddTodo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Link to="/">Home</Link>
          <Link to="/add">Add Todo </Link>
          <Route path="/" exact component={Todo} />
          <Route path="/add" component={AddTodo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
