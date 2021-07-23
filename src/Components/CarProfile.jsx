import React from "react"
import { Container, Row, Image,Col,Card } from "react-bootstrap"
import {Link} from "react-router-dom"

const CarProfile=()=>{

    
    return(
        <Container className="custom-container">
            <Row>
                <Col md={{span:4, offset:0}} sm={{span:10, offset:1}}>
                    <Image src="https://res.cloudinary.com/dsereboo/image/upload/v1626125450/toyota-final_ak2c8f.png"/>
                </Col>
                <Col md={{span:8, offset:0}} sm={{span:10, offset:1}} xs={{span:9, offset:1}} >
                    <Row><h3>GR 5756 Z</h3></Row>
                    <Row><p className="text-muted">Toyota Vitz</p></Row>
                    <Row><p className="text-muted">2004</p></Row>
                    <Row><p className="text-muted">Daniel A-Sereboo</p></Row>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md={{span:3, offset:0}}  xs={{span:9, offset:1}}>
                    <Card>
                        <Card.Img variant="top"  />
                        <Card.Body>
                            <Card.Title>Add Expense</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{span:3, offset:0}}  xs={{span:9, offset:1}}>
                <Card>
                        <Card.Img variant="top"  />
                        <Card.Body>
                            <Card.Title>Payment Record</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{span:3, offset:0}} xs={{span:9, offset:1}}>
                <Card>
                        <Card.Img variant="top"  />
                        <Card.Body>
                        <Card.Title ><Link to="/profileCard" className="stretched-link">Driver details</Link></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{span:3, offset:0}}  xs={{span:9, offset:1}}>
                <Card>
                        <Card.Img variant="top"  />
                        <Card.Body>
                            <Card.Title>Insurance</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    )
}

export default CarProfile