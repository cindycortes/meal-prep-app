import React, { Component } from 'react'
import MealItem from './MealItem'
import AddMealForm from './AddMealForm';

class MealList extends Component {

    render() {
        console.log(this.props.meals);

        const { meals } = this.props
        console.log(meals);

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

                        {listOfMeals}
                    </div>

                </div>

            </div>

              


         
        )
    }
}



export default MealList