
import React from "react"
import { Button } from 'reactstrap';
import { Row, Col, Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle } from 'reactstrap';



const MealItem = ({ meal }) => {
    console.log(meal, 'cindy')

    const { phase, date, meal_of_the_day, protein, water_intake } = meal
    console.log(meal)

    return (
        <div className="container">
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardText>

                            {date}<br />
                            {phase}<br />
                            {meal_of_the_day}<br />
                            {protein}<br />
                            {water_intake}
                        </CardText>
                        <Button style={{width: "50px"}}>X</Button>


                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default MealItem 