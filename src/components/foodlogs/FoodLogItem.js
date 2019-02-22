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
                
            </div>
        )
    }
}

export default FoodLogItem