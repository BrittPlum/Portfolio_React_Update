import React from 'react';
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




function App() {
  return (
 
   <Router basename= {process.env.PUBLIC_URL}>
      <div className="app">
        
          <Route path="/" exact component= { About }/>
          <Route path="/about" component= { About }/>
          <Route path="/portfolio" component= { Portfolio }/>
          <Route path="/resume" component= { Resume }/>
   
      </div>
    </Router>
  );
}

export default App;
