import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col, CardDeck } from 'reactstrap';


class PhaseList extends Component {


    routeChange1(preop) {
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
                <Row>

                     <img src="https://www.lifestyleupdated.com/wp-content/uploads/2012/05/living-a-healthy-lifestyle1.jpg" style={{height: "25%", width: "50%", marginLeft: "25%"}} class="img-fluid" alt="Responsive image"/>
                </Row>

                    <Row>

                        <Col>
                            <Card body className="text-center">
                                <CardTitle><h3>PRE-OP DIET</h3></CardTitle>
                                <CardText>2 weeks prior to surgery</CardText>
                                <Button color="success" onClick={() => this.routeChange1('/preop')}>PRE-OP PAGE</Button>
                            </Card>
                        </Col>


                        <Col>
                            <Card body className="text-center">
                                <CardTitle><h3>POST-OP DIET</h3></CardTitle>
                                <CardText>8-9 weeks after surgery</CardText>
                                <Button color="success" onClick={() => this.routeChange2('/postop')}> POST-OP PAGE</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card body className="text-center">
                                <CardTitle><h3>LIFESTYLE</h3></CardTitle>
                                <CardText>Maintaining a healthy regimen</CardText>
                                <Button color="success" onClick={() => this.routeChange3('/lifestyle')}>LIFESTYLE PAGE</Button>
                            </Card>
                        </Col>


                    </Row>
            </div>
                );
            }
        
        };
        
export default PhaseList;