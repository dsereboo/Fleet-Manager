import React from "react"
import {Col, Row}from "react-bootstrap"
import { NavLink, Link} from "react-router-dom"
// import Avatar from 'react-avatar';


const NavContent=(props)=>{
   
    return (
      <div>
        <Row className="side-header">
          <h4 className="brand">FLEET MANAGER</h4>
        </Row>
        {/* <Row >
         
          <Col md={12}>
            <Row className="id-card">
              <Avatar name="Avater" size="40" round={true} />
              <span className="icon-text">Name</span>
            </Row>     
          </Col>
          {/* <Container>
            <Row>
              <Col md={4}>
                <Avatar name="Avater" size="40" round={true} />
              </Col>
              <Col md={4}>
                <p>Name</p>
              </Col>
            </Row>
          </Container> 
        </Row> */}
        <Row className="nav-icon-box">
          <Col md={12} className="nav-links">
            <Row className="icon-row">
              <NavLink to="/" className="icon-side-spacing">
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path
                    fill="rgba(255,255,255,.8)"
                    d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
                  />
                </svg>
                <span className="icon-text">Home</span>
              </NavLink>
            </Row>
            <Row className="icon-row">
              <Link to="/finances" className="icon-side-spacing">
                <svg
                  className="icon-colour"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#f6f6f6"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                  />
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                </svg>
                <span className="icon-text">Finances</span>
              </Link>
            </Row>
            <Row className="icon-row">
              <Link to="/fleet" className="icon-side-spacing">
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path
                    fill="#f6f6f6"
                    d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z"
                  />
                </svg>
                <span className="icon-text">Fleet</span>
              </Link>
            </Row>
            <Row className="icon-row">
              <Link to="/notifications" className="icon-side-spacing">
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path
                    fill="#f6f6f6"
                    d="M21 6.5C21 8.43 19.43 10 17.5 10S14 8.43 14 6.5 15.57 3 17.5 3 21 4.57 21 6.5M19 11.79C18.5 11.92 18 12 17.5 12C14.47 12 12 9.53 12 6.5C12 5.03 12.58 3.7 13.5 2.71C13.15 2.28 12.61 2 12 2C10.9 2 10 2.9 10 4V4.29C7.03 5.17 5 7.9 5 11V17L3 19V20H21V19L19 17V11.79M12 23C13.11 23 14 22.11 14 21H10C10 22.11 10.9 23 12 23Z"
                  />
                </svg>
                <span className="icon-text">Notifications</span>
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
    );
}



export default NavContent
