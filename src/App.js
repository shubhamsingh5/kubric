import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Board from './Board';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:boardSize" component={Board} />
      </Switch>
    </Router>
  );
}

export default App;
