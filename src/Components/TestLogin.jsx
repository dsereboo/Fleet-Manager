import React,{useState} from "react"
import {Container, Row, Col,Card,Form, Button} from "react-bootstrap"
import { connect } from "react-redux"
import {Link,Redirect} from "react-router-dom"
import { googleSignIn, signIn } from "../Actions/authActions"



const TestLogin=(props)=>{
  const [details, setDetails] = useState({ email: "", password: "" })

  const handleSubmit = (event) => {
    event.preventDefault()
    props.signIn(details.email, details.password)
  }

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  const handleSignIn = () => {
    props.googleSignIn()
  }

  if(!props.auth.isLoaded){
    return (<h1>Page is loading!...</h1>)
  }


  if( props.auth.isLoaded && !props.auth.isEmpty){
    return (
      <Redirect to="/" />
    )
  }

  return (
    <Container>
      <Row>
        <Col md={{ offset: 3, span: 5 }}>
          <Card className="authentication-card">
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
              <Button className="button-padding" variant="light" onClick={handleSignIn} block>Sign in with Google <img alt="google icon" src="https://img.icons8.com/fluent/24/000000/google-logo.png" /></Button>
            </Card.Body>
            <Card.Text className="text-center">Don't have an account?<Link to="/signUp"><p className="text-center">Sign Up here!</p></Link></Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps={
  signIn,
  googleSignIn,

}

const mapStateToProps=(state)=>{
    return{ auth: state.firebase.auth,}
}


export default connect(mapStateToProps,mapDispatchToProps)(TestLogin) 