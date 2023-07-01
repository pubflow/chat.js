import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Logout from './Auth/Logout';
import Chat from './Chat/Chat';
import States from './States/States';
import UploadImage from './UploadImage/UploadImage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/states" component={States} />
        <Route exact path="/upload" component={UploadImage} />
      </Switch>
    </Router>
  );
}

export default App;
