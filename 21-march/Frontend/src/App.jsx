import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupPage from './siginup';
import LoginPage from './login';

function App() {
  return (
    <Router>
      
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      
    </Router>
  );
}

export default App;

