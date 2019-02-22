import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddMealForm extends Component {
    state = {
        phase: "", 
        date: "", 
        meal_of_the_day: "", 
        protein: "", 
        water_intake: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        const newMeal = {
            phase: this.state.phase,
            date: this.state.date, 
            meal_of_the_day: this.state.meal_of_the_day,
            protein: this.state.protein,
            water_intake: this.state.water_intake
        }
        this.props.addMeal(newMeal)
        
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        console.log('handleInputChange', name, value);
        this.setState({
            [name]: value
        })
    }


    render() {
        console.log(this.props.meals);
        return (

            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Select Phase</Label>
                    <Input type="select" name="phase" value={this.state.phase} onChange={this.handleInputChange}>
                        <option>Pre-Op</option>
                        <option>Post-Op</option>
                        <option>Lifestyle</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Date</Label>
                    <Input
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Meal Of The Day</Label>
                    <Input type="select" name="meal_of_the_day" value={this.state.meal_of_the_day} onChange={this.handleInputChange}>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack</option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Type of Protein</Label>
                    <Input type="select" name="protein" value={this.state.protein} onChange={this.handleInputChange}>
                        <option>Chicken</option>
                        <option>Fish</option>
                        <option>Lunch Meat</option>
                        <option>Protein Shake</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Water Intake</Label>
                    <Input type="select" name="water_intake" value={this.state.water_intake} onChange={this.handleInputChange}>
                        <option>None</option>
                        <option>4oz</option>
                        <option>8oz</option>
                        <option>12oz</option>
                        <option>16oz</option>
                    </Input>
                </FormGroup>
                <Button color="success" type="submit">Submit Meal</Button>

            </Form>


        );
    }
}

export default AddMealForm

