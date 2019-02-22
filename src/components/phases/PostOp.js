import React, { Component } from 'react';
import CreateFoodLog from '../foodlogs/AddMealForm';


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
                            <li className="collection-item">Clear liquids</li>
                            <li className="collection-item">Clear Protein</li>
                            <li className="collection-item">Fiber: Powder Fiber</li>
                            <li className="collection-item">Jello</li>
                            <li className="collection-item">Broth & Soup</li>
                            <li className="collection-item">Sugar free popsicles</li>





                            <li class="collection-item">Water!!! At least 40oz a day</li>
                            {/* <li class="collection-item">No fruit and veggies</li>
                            <li class="collection-item">Little to no fat, no butter, no oil</li> */}
                        </ul>
                    </div>
                    <div className="col s6">

                        <ul class="collection with-header">
                            <li className="collection-header"><h5>CAN EAT (3 weeks & up) </h5></li>
                            <li className="collection-item">Liquids</li>
                            <li className="collection-item">Protein Shakes</li>
                            <li clasName="collection-item">Eggs</li>


                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col">

                        <CreateFoodLog />
                    </div>
                    <div className="col">Name
                        Food Log
                    </div>
                </div>
            </div>

        )
    }
}

export default PostOp;