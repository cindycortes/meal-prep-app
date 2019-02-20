import React, { Component } from 'react';
// import MealTracker from './components/MealTracker';
class PreOp extends Component {
    
    render() {
        return (
            <div>
                <h1> Welcome to your Pre-Op Tracker</h1><br />
                <h4>Description: 2 weeks prep</h4>
                <ul class="collection">
                    <li class="collection-item">Lean protein: Protein shakes, chicken (baked/boiled), fish, lunch meat</li>
                    <li class="collection-item">No fruit and veggies</li>
                    <li class="collection-item">Little to no fat, no butter, no oil</li>
                    <li class="collection-item">Water!!! At least 40oz a day</li>
                </ul>

               

                Week 1:

                {/* <MealTracker /> */}


            </div>
        )
    }
}

export default PreOp;