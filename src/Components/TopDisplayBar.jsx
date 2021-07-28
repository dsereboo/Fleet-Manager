import React from "react"
import { Navbar,Button,Dropdown,Nav } from "react-bootstrap"
import Avatar from 'react-avatar';
import { signOut } from "../Actions/authActions";
import { connect } from "react-redux";

const TopDisplayBar=(props)=>{
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href="#link"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
          
        </a>
    ));

    const handleClick=()=>{
        props.signOut()
    }


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
                    <Dropdown align="start" id="dropdown-menu-align-left">
                        <Dropdown.Toggle  as={CustomToggle} >
                            <Avatar data-toggle="dropdown" name="Avater" size="40" round={true}/> 
                        </Dropdown.Toggle>

                        <Dropdown.Menu  >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                            <Button variant="default" onClick={handleClick}>
                                Logout
                            </Button>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                                               
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}


const mapDispatchToProps={
    signOut,
}


export default  connect(null, mapDispatchToProps)(TopDisplayBar)