import React, { Component } from 'react';

class PostOp extends Component { 
    render () {
        return (
           <div>
                <h1> Welcome to your Post-Op Tracker</h1><br/>
                <h4>Description: 8-9 weeks post surgery</h4>
                <ul class="collection">
                    <li class="collection-item">Lean protein: Protein shakes, chicken (baked/boiled), fish, lunch meat</li>
                    <li class="collection-item">No fruit and veggies</li>
                    <li class="collection-item">Little to no fat, no butter, no oil</li>
                    <li class="collection-item">Water!!! At least 40oz a day</li>
                </ul>

            </div>
        )
    }
}

export default PostOp;