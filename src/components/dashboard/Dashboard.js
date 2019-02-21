import React, { Component } from 'react'
import PhaseList from '../PhaseList';
// import FoodList from '../foodlogs/FoodList'
import CreateFoodLog from '../foodlogs/CreateFoodLog'

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s6">
                        <PhaseList />
                    </div>
                    <div className="col s6">
                        {/* <CreateFoodLog />  */}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard