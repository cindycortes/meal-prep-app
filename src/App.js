import React, { Component } from 'react';
import PhaseList from './components/PhaseList';
// import Phase from './components/Phase';
import Header from './components/navbar/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/navbar/Home';
import MealTracker from './components/MealTracker';
import About from './components/navbar/About';
import PreOp from './components/phases/PreOp';
import PostOp from './components/phases/PostOp';
import Lifestyle from './components/phases/Lifestyle';
import Footer from './components/navbar/Footer';
import './App.css';


class App extends Component {
  render() {

    return (

      
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/phaselist" component={PhaseList} />
          <Route path="/preop" component={PreOp} />
          <Route path="/postop" component={PostOp} />
          <Route path="/lifestyle" component={Lifestyle} />
          <Route path="/mealtracker" component={MealTracker} />

          
          {/* <Footer /> */}
        </div>
      
    );
  }
}

export default App;
