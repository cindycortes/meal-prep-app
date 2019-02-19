import React, { Component } from 'react';
import PhaseList from './components/PhaseList';
// import Phase from './components/Phase';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
// import MealPrep from './components/MealPrep';
import About from './components/About';

import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* <PhaseList /> */}
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
