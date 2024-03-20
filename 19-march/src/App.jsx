import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Components/Nav';
import Footer from './Components/Footer';
import Main from './main';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      <Main/>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;

