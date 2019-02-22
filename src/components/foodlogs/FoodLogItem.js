import React from "react"
import { Button } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle } from 'reactstrap';



class FoodLogItem extends React.Component {
   
    addItemToCart = (e) => {
        this.props.addCameraToCart(e.target.value)
    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle><h3>{this.props.cameraDetail.name}</h3></CardTitle>
                        <CardImg style={{padding: "15%"}}src={this.props.cameraDetail.picture} alt={this.props.cameraDetail.name} />
                        <CardSubtitle><h4>Price: ${this.props.cameraDetail.price} </h4></CardSubtitle>
                        <CardText> Rating: {this.props.cameraDetail.rating}</CardText>
                        <Button value={this.props.cameraDetail.id} onClick={this.addItemToCart} color="primary">Add To Cart</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default FoodLogItem