import React, { Component } from 'react';
import CreateFoodLog from '../foodlogs/CreateFoodLog';


class PostOp extends Component {
    render() {
        return (
            <div className="container">
                <h1> POST-OP DIET</h1><br />

                <h4>Description: 8-9 weeks of strict diet after surgery.</h4>

                <div className="row">
                    <div className="col s6">

                        <ul class="collection with-header">
                            <li className="collection-header"><h5>CAN EAT (First 2 weeks): </h5></li>
                            <li class="collection-item">Clear liquids</li>
                            <li class="collection-item">Clear Protein</li>
                            <li class="collection-item">Fiber: Powder Fiber</li>
                            <li class="collection-item">Jello</li>
                            <li class="collection-item">Broth & Soup</li>
                            <li class="collection-item">Sugar free popsicles</li>





                            <li class="collection-item">Water!!! At least 40oz a day</li>
                            {/* <li class="collection-item">No fruit and veggies</li>
                            <li class="collection-item">Little to no fat, no butter, no oil</li> */}
                        </ul>
                    </div>
                    <div className="col s6">

                        <ul class="collection with-header">
                            <li className="collection-header"><h5>CAN EAT (3 weeks & up) </h5></li>
                            <li class="collection-item">Liquids</li>
                            <li class="collection-item">Protein Shakes</li>
                            <li class="collection-item">Eggs</li>


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

export default PostOp;