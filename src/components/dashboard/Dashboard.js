import React, { Component } from 'react'
import FoodList from '../foodlogs/FoodList'

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <FoodList />
                    </div>
                    <div className="col s12 m5 offset-ml">// meal tracker??
                        {/* <Notifications /> */} 
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard