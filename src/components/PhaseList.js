import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


class PhaseList extends Component {
    

    routeChange1 (preop) {
        this.props.history.push(preop);
    }

    routeChange2(postop) {
        this.props.history.push(postop);
    }
    routeChange3(lifestyle) {
        this.props.history.push(lifestyle);
    }
    
    render() {

        return (

            <div>
                <div className="row">
                    <div className="col">


                        <Card body className="text-center">
                            <CardTitle><h3>PRE-OP</h3></CardTitle>
                            <CardText>2 weeks prior to surgery.</CardText>
                            <Button onClick={() => this.routeChange1('/preop') }>PRE-OP PAGE</Button>
                        </Card>
                        <Card body className="text-center">
                            <CardTitle><h3>POST-OP</h3></CardTitle>
                            <CardText>8-9 weeks after surgery.</CardText>
                            <Button onClick={() => this.routeChange2('/postop')}> POST-OP PAGE</Button>
                        </Card>
                        <Card body className="text-center">
                            <CardTitle><h3>LIFESTYLE</h3></CardTitle>
                            <CardText>Maintaining healthy regimen</CardText>
                            <Button onClick={() => this.routeChange3('/lifestyle')}>LIFESTYLE PAGE</Button>
                        </Card>
                    </div>
                    {/* <div className="col">
                        <Card body className="text-center">
                            <CardTitle><h3>Meal Tracker</h3></CardTitle>
                            <CardText>Track your progress</CardText>
                            <Button>MEAL TRACKER</Button>
                        </Card>
                    </div> */}

                </div>
            </div>
        );
    }

};

export default PhaseList;