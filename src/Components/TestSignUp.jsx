import React,{useState} from "react"
import {Container, Row, Col, Card,Form, Button} from "react-bootstrap"


const TestSignUp=(props)=>{
    const[details, setDetails]=useState({ email:"", password:""})

    const handleSubmit=(event)=>{
        event.preventDefault()
        
    }

    const handleChange=(event)=>{
        setDetails({...details, [event.target.name]:event.target.value})
        console.log(details)
    }

    return(
        <Container>
            <Row>
                <Col md={{offset:3, span:5}}>
                    <Card>
                        <Card.Title className="text-center"><h4>Sign Up</h4></Card.Title>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="text" onChange={handleChange} placeholder="Enter your email address" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" onChange={handleChange} placeholder="Enter a password" required />
                                </Form.Group>
                                <Button variant="primary" type="submit" block>Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
       
    )
}



export default TestSignUp