import React,{useState} from "react"
import {Container, Row, Col,Card,Form, Button} from "react-bootstrap"
import {Link} from "react-router-dom"



const TestLogin=(props)=>{
    const[details, setDetails]=useState({ email:"", password:""})

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.signIn(details.email, details.password)
    }

    const handleChange=(event)=>{
        setDetails({...details, [event.target.name]:event.target.value})
    }

    return (
      <Container>
        <Row>
          <Col md={{ offset: 3, span: 5 }}>
            <Card>
              <Card.Title className="text-center">
                <h4>Login</h4>
              </Card.Title>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="text"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" block>
                    Sign In
                  </Button>
                </Form>
                <Button className="button-padding" variant="light" onClick="" block>Sign in with Google <img alt="google icon" src="https://img.icons8.com/fluent/24/000000/google-logo.png"/></Button>
              </Card.Body>
              <Card.Text className="text-center">Don't have an account?<Link to="/signUp"><p className="text-center">Sign Up here!</p></Link></Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}


export default TestLogin 