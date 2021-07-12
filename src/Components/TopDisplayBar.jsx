import React from "react"
import { Navbar,Button,Container,Row,Col,Nav } from "react-bootstrap"
import Avatar from 'react-avatar';

const TopDisplayBar=(props)=>{
    return(
        <Navbar bg="light-custom" expand="sm" className="sticky-top" id="stale">
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={props.toggle} />
            <Button variant="light" className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(152,152,152)" className="bi-bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </Button>

            <Nav className="ml-auto">
                <Nav.Link href="#link">
                    <Container>
                        <Row>
                            <Col><p className="style-text"></p></Col>
                            <Col>
                            <Avatar name="Avater" size="40" round={true}/>
                            </Col>
                        </Row>
                    </Container>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default TopDisplayBar