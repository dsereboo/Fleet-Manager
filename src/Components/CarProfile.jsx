import React,{useState} from "react"
import Avatar from "react-avatar";
import { Container, Row, Image,Col,Card,Modal, Button } from "react-bootstrap"
import {Link} from "react-router-dom"



const CarProfile=()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return(
        <Container className="custom-container">
            <Modal show={show} onHide={handleClose} >
                {/* <Modal.Header closeButton>
                </Modal.Header> */}
                <Modal.Body closeButton>
                    <Container>
                        <Row>
                            <Col>
                                <h5>Profile</h5>
                                <Avatar  className="mx-auto d-block"  size="120" src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/241847pKKKz5Rm.png?alt=media&token=4092c971-8274-41a9-8e8b-b2ba2f7ffbea" />
                                <h3 className="text-center">Daniel Sereboo</h3>
                                <hr />
                                <p className="text-muted">Residence</p>
                                <p>No. 4 Lower Hill Drive,Legon</p>
                                <hr/>
                                <p className="text-muted">Phone Number</p>
                                <p>+233 20 548 0856</p>
                                <hr/>
                                <Button className="rounded-button" size="md" block variant="primary">View full profile</Button>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
            </Modal>

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
                    <Card className="car-card">
                        <Card.Body>
                        <img alt="payment"  src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/23223228VH5YwvB4.png?alt=media&token=95f46788-dcfb-4efd-966c-c057012b756f"/>
                            <Card.Title>Add Expense</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{span:3, offset:0}}  xs={{span:9, offset:1}}>
                <Card className="car-card">
                        <Card.Body>
                            <img alt="records" src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/232259474YBIVqJM.png?alt=media&token=2032fd38-29b6-45c3-9645-11efd2afccc2"/>
                            <Card.Title>Payment Record</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{span:3, offset:0}} xs={{span:9, offset:1}}>
                <Card className="car-card">  
                        <Card.Body>
                        <img alt="details" src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/2323353EFa4BVPd.png?alt=media&token=5760f868-1582-4f18-8a52-7474e658e4e4"/>
                        <Card.Title ><Link onClick={handleShow} className="stretched-link">Driver details</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{span:3, offset:0}}  xs={{span:9, offset:1}}>
                <Card className="car-card">
                        <Card.Body>
                            <img alt="insurance" src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/2322500ZVRNemCk.png?alt=media&token=18e7d22e-8c3e-4e1c-9242-56331342d961"/>
                            <Card.Title>Insurance</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    )
}

export default CarProfile