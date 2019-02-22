
import React from "react"
import { Button } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle } from 'reactstrap';



const MealItem = ({ meal }) => {
    console.log(meal, 'cindy')

    const { phase, date, meal_of_the_day, protein, water_intake } = meal
    console.log(meal) 

    return (
        <div className="container">
            <Card>
                {phase}<br/>
                {date}<br/>
                {meal_of_the_day}<br/>
                {protein}<br/>
                {water_intake}

            </Card>
        </div>
    )
}

export default MealItem 