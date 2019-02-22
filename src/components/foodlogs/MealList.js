import React, { Component } from 'react'
import MealItem from './MealItem'

class MealList extends Component {
    state = {
        phase: "", 
        date: "", 
        meal_of_the_day: "", 
        protein: "", 
        water_intake: ""
    }

    render() {
        console.log(this.props.meals);

        const { meals } = this.props
        console.log(meals);

        let listOfMeals = meals.map(meal => {
            return <MealItem key={meal.id} meal={meal} />
        })

        return (
            <div>
               
                {listOfMeals}

                <div className="container">
                    

                </div>
               
                {/* <MealItem />
                <MealItem /> */}
                

            </div>
        )
    }
}



export default MealList