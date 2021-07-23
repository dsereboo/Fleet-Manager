import React from "react"
import {Card} from "react-bootstrap"
import { Link } from "react-router-dom"

const CarCard=()=>{
    return(
        <Card className="car-card">
            <Card.Img variant="top"  className="img-responsive image-border" src="https://res.cloudinary.com/dsereboo/image/upload/v1626125450/toyota-final_ak2c8f.png" />
            <Card.Body>
                <Card.Title ><Link to="/carProfile" className="stretched-link">GR 5756 Z</Link></Card.Title>
                <Card.Text>
                    Daniel A-Sereboo
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default CarCard