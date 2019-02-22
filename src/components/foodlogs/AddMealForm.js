import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddMealForm extends Component {
    render() {
        return (

            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Select Phase</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Pre-Op</option>
                        <option>Post-Op</option>
                        <option>Lifestyle</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Meal Of The Day</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack</option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Type of Protein</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Chicken</option>
                        <option>Fish</option>
                        <option>Lunch Meat</option>
                        <option>Protein Shake</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Water Intake</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>None</option>
                        <option>4oz</option>
                        <option>8oz</option>
                        <option>12oz</option>
                        <option>16oz</option>
                    </Input>
                </FormGroup>
                <Button>Submit Meal</Button>

            </Form>


        );
    }
}

export default AddMealForm

