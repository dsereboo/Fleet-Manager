import React from "react"
import {Card,Col} from "react-bootstrap"
import { Link} from "react-router-dom"


const CarCard=(props)=>{
    
    return(
        
       <Col md={{span:3,}}>
            <Card className="car-card">
                <Card.Img variant="top" className="img-responsive image-border" src={props.carInfo.image} />
                <Card.Body>
                    <Card.Title ><Link to={`/fleet/${props.carId}`} className="stretched-link">{props.carInfo.id}</Link></Card.Title>
                    <Card.Text>
                      {props.carInfo.Owner}
                    </Card.Text>
                </Card.Body>
            </Card>
           
       </Col> 
        
    )
}


export default CarCard