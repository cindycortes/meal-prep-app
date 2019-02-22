import React, { Component } from 'react'
import MealItem from './MealItem'
import AddMealForm from './AddMealForm';

class MealList extends Component {
    state = {

    }
    render() {
        // console.log(this.props.meals);

        const { meals } = this.props
        console.log(meals, "hello from mealList");

        let listOfMeals = meals.map(meal => {
            return <MealItem key={meal.id} meal={meal} />
        })

        return (
            <div>

                <div className="row">
                    <div className="col">
                        <AddMealForm />

                    </div>
                    <div className="col">
                    <h4>Food Log </h4>
                        {listOfMeals}
                    </div>

                </div>

            </div>

              


         
        )
    }
}



export default MealList