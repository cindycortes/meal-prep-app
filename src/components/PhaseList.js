import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const PhaseList = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    

                    <Card body className="text-center">
                        <CardTitle><h3>PRE-OP</h3></CardTitle>
                        <CardText>2 weeks prior to surgery.</CardText>
                        <Button>PRE-OP PAGE</Button>
                    </Card>
                    <Card body className="text-center">
                        <CardTitle><h3>POST-OP</h3></CardTitle>
                        <CardText>8-9 weeks after surgery.</CardText>
                        <Button>POST-OP PAGE</Button>
                    </Card>
                    <Card body className="text-center">
                        <CardTitle><h3>LIFESTYLE</h3></CardTitle>
                        <CardText>Maintaining healthy regimen</CardText>
                        <Button>LIFESTYLE PAGE</Button>
                    </Card>
                </div>
                <div className="col">
                    <Card body className="text-center">
                        <CardTitle><h3>Meal Tracker</h3></CardTitle>
                        <CardText>Track your progress</CardText>
                        <Button>MEAL TRACKER</Button>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default PhaseList;