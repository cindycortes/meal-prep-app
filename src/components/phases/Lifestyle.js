import React, { Component } from 'react';
import AddMealForm from '../foodlogs/AddMealForm';


class Lifestyle extends Component {
    render() {
        return (
            <div className="container">


                <h1> Welcome to your Lifestyle Tracker</h1><br />
                <h4>Description: Tracker for life! </h4>
                <div className="row">
                    <div className="col s6">

                        <ul class="collection">
                            <li class="collection-item">5 small meals per day</li>
                            <li class="collection-item">1/2 cup of food per meal, nothing over!</li>
                            <li class="collection-item">Can't have water during meals. Must drink 30 minutes prior or after a meal. </li>
                            <li class="collection-item">Regular exercise</li>
                        </ul>
                    </div>
                </div>


                <div className="col">

                    <AddMealForm />
                </div>
                <div className="col">

                </div>

            </div>
        )
    }
}

export default Lifestyle;