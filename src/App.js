import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { userProvider } from './components/UsersContext';

function App() {

  return (
  <userProvider>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/userData" component={UserList} /> 
    </Switch>
  </userProvider>
  );
}

export default App;
