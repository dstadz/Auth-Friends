import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendList from './components/FriendList'
import NewFriendForm from './components/NewFriendForm'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login</Link>
        <Link to='/friendlist'>Friends</Link>
        <Switch>
          <PrivateRoute path='/friendlist'>
            <NewFriendForm />
            <FriendList />
          </PrivateRoute>

          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
