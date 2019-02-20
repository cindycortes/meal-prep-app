import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import FoodLogDetails from './components/foodlogs/FoodLogDetails';

import PhaseList from './components/PhaseList';
// import Phase from './components/Phase';
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
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/foodlog/:id" component={FoodLogDetails} />

            <Route path="/about" component={About} />
            <Route exact path="/phaselist" component={PhaseList} />
            <Route path="/preop" component={PreOp} />
            <Route path="/postop" component={PostOp} />
            <Route path="/lifestyle" component={Lifestyle} />
            <Route path="/mealtracker" component={MealTracker} />

          </Switch>


          {/* <Footer /> */}
        </div>

      </BrowserRouter>

    );
  }
}

export default App;
