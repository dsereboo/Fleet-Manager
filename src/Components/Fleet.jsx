import React from "react"
import { Container, Row,Col } from "react-bootstrap"
import CarCard from "./CarCard"

const Fleet=()=>{
    return(
        <Container className="custom-container">
            <Row>
                <Col md={{span:3}}>
                    <CarCard/>
                </Col>
                <Col md={3}>
                    <CarCard/>
                </Col>
                <Col md={3}>
                    <CarCard/>
                </Col>
                <Col md={3}>
                    <CarCard/>
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default Fleet