import React, { Component } from 'react';
// import MealTracker from './components/MealTracker';
import AddMealForm from '../foodlogs/AddMealForm';
import MealList from '../foodlogs/MealList';
import Axios from 'axios';

class PreOp extends Component {

    state = {
        meals: []
    }

    async componentDidMount() {
        const response = await fetch(`http://localhost:8001/foodlog`)
        const meals = await response.json();
        this.setState({ meals });
        // console.log(meals)
    } catch(error) {
        console.log(error);
    }


    addMeal = (newMeal) => {
        const { phase, date, meal_of_the_day, protein, water_intake } = newMeal;
        fetch(`http://localhost:8001/foodlog`, {
            method: "post",
            body: JSON.stringify({ phase, date, meal_of_the_day, protein, water_intake }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState(prevState => {
                    return {
                        meals: [
                            ...prevState.meals,
                            {
                                id:json[0].id,
                                phase,
                                date,
                                meal_of_the_day,
                                protein,
                                water_intake
                            }
                        ]
                    }
                })
            })
    }

    removeMeal = id => {
        Axios.delete(`http://localhost:8001/foodlog/${id}`)
        this.setState(prevState => ({
            meals: prevState.meals.reduce((acc, cv) => {
                if (cv.id === (id)) {
                    return [
                        ...acc,
                        {
                            ...cv,
                        }
                    ]
                }
            })
        }))
    }

    render() {


        return (
            <div className="container">
                <h1> PRE-OP DIET</h1><br />

                <h4>Description: 2-4 weeks of prep prior to surgery date</h4>
                <h6>Men: may need to eat more to stay full; averaging 1400-1800 calories per day.
                </h6><h6>Women: may need fewer calories; averaging 1000-1400 calories per day. </h6>
                <div className="row">
                    <div className="col s6">

                        <ul className="collection with-header">
                            <li className="collection-header"><h5>WHAT TO EAT: </h5></li>
                            <li className="collection-item">Lean protein: Chicken (baked/boiled), fish or lunch meat</li>
                            <li className="collection-item">Protein Shakes: Premier Protein Shake, Bariatric Advantage, Pure Protein</li>
                            <li className="collection-item">Entrees: Lean Cuisine entrees, Healthy Choice entrees, Weight Watchers Smart Ones entrees, Atkins entrees *Most entrees average 200-400 calories. </li>


                            <li className="collection-item">Water!!! At least 40oz a day</li>
                            {/* <li class="collection-item">No fruit and veggies</li>
                            <li class="collection-item">Little to no fat, no butter, no oil</li> */}
                        </ul>
                    </div>
                    <div className="col s6">

                        <ul className="collection with-header">
                            <li className="collection-header"><h5>WHAT NOT EAT: </h5></li>
                            <li className="collection-item">No fruit and veggies</li>
                            <li className="collection-item">Avoid fat, butter and oil</li>

                        </ul>
                    </div>
                </div>



                <div className="row">
                    <div className="col">

                        <AddMealForm addMeal={this.addMeal}/>
                    </div>

                    <div className="col">

                        <MealList meals={this.state.meals}  />
                    </div>
                </div>

            </div>


        )
    }
}

export default PreOp;