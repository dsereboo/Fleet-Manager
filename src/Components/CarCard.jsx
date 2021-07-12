import React from "react"
import {Card, Button} from "react-bootstrap"
import { Link } from "react-router-dom"

const CarCard=()=>{
    return(
        <Card className="car-card">
            <Card.Img variant="top"  className="img-responsive" src="https://res.cloudinary.com/dsereboo/image/upload/v1626125450/toyota-final_ak2c8f.png" />
            <Card.Body>
                <Card.Title ><Link to="/" className="stretched-link">GR 5756 Z</Link></Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default CarCard