import React, { Component } from 'react';
// import MealTracker from './components/MealTracker';
import CreateFoodLog from '../foodlogs/CreateFoodLog';

class PreOp extends Component {

    render() {
        return (
            <div className="container">
                <h1> PRE-OP DIET</h1><br />

                <h4>Description: 2-4 weeks of prep prior to surgery date</h4>
                <h6>Men: may need to eat more to stay full; averaging 1400-1800 calories per day.
</h6><h6>Women: may need fewer calories; averaging 1000-1400 calories per day. </h6>
                <div className="row">
                    <div className="col s6">

                        <ul class="collection with-header">
                            <li className="collection-header"><h5>CAN EAT: </h5></li>
                            <li class="collection-item">Lean protein: Chicken (baked/boiled), fish or lunch meat</li>
                            <li class="collection-item">Protein Shakes: Premier Protein Shake, Bariatric Advantage, Pure Protein</li>
                            <li class="collection-item">Entrees: Lean Cuisine entrees, Healthy Choice entrees, Weight Watchers Smart Ones entrees, Atkins entrees *Most entrees average 200-400 calories. </li>


                            <li class="collection-item">Water!!! At least 40oz a day</li>
                            {/* <li class="collection-item">No fruit and veggies</li>
                            <li class="collection-item">Little to no fat, no butter, no oil</li> */}
                        </ul>
                    </div>
                    <div className="col s6">

                        <ul class="collection with-header">
                            <li className="collection-header"><h5>CAN NOT EAT: </h5></li>
                            <li class="collection-item">No fruit and veggies</li>
                            <li class="collection-item">Avoid fat, butter and oil</li>
                            {/* <li class="collection-item">Water!!! At least 40oz a day</li> */}
                        </ul>
                    </div>
                </div>



                <div className="row">
                    <div className="col">

                        <CreateFoodLog />
                    </div>
                    <div className="col">
                        Food Log
                    </div>
                </div>

            </div>


        )
    }
}

export default PreOp;