import React,{useEffect, useState} from "react"
import Avatar from "react-avatar";
import { Container, Row, Image,Col,Card,Modal, Button } from "react-bootstrap"
import { connect,} from "react-redux";
import {Link, useParams} from "react-router-dom"



const CarProfile=(props)=>{
    //State and methods for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Accessing car id from url
    const {id}=useParams()

    //Finding desired user and updating local state
    const[chosenCar,setChosenCar]=useState({})
    const findCar=()=>{
        let car=(props.cars.filter((item)=>item.id===id))
        setChosenCar(car[0])
    }

    useEffect(findCar)



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
                    <Row><h3>{chosenCar.id}</h3></Row>
                    <Row><p className="text-muted">{`${chosenCar.manufacturer} ${chosenCar.carModel}`}</p></Row>
                    <Row><p className="text-muted">{chosenCar.modelYear}</p></Row>
                    <Row><p className="text-muted">{chosenCar.Owner}</p></Row>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md={{span:3, offset:0}}  xs={{span:9, offset:1}}>
                    <Card className="car-card">
                        <Card.Body>
                        <img className="action-image" alt="payment"  src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/23223228VH5YwvB4.png?alt=media&token=95f46788-dcfb-4efd-966c-c057012b756f"/>
                            <Card.Title className="text-center">Add Expense</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{span:3, offset:0}}  xs={{span:9, offset:1}}>
                <Card className="car-card">
                        <Card.Body>
                            <img className="action-image" alt="records" src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/232259474YBIVqJM.png?alt=media&token=2032fd38-29b6-45c3-9645-11efd2afccc2"/>
                            <Card.Title className="text-center">Payment Record</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{span:3, offset:0}} xs={{span:9, offset:1}}>
                <Card className="car-card">  
                        <Card.Body>
                        <img className="action-image" alt="details" src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/2323353EFa4BVPd.png?alt=media&token=5760f868-1582-4f18-8a52-7474e658e4e4"/>
                        <Card.Title className="text-center"><Link onClick={handleShow} className="stretched-link">Driver details</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{span:3, offset:0}}  xs={{span:9, offset:1}}>
                <Card className="car-card">
                        <Card.Body>
                            <img className="action-image" alt="insurance" src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/2322500ZVRNemCk.png?alt=media&token=18e7d22e-8c3e-4e1c-9242-56331342d961"/>
                            <Card.Title className="text-center">Insurance</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{span:3, offset:0}} xs={{span:9, offset:1}}>
                <Card className="car-card">  
                        <Card.Body>
                        <img className="action-image" alt="details" src="https://firebasestorage.googleapis.com/v0/b/fleet-manager-d1cef.appspot.com/o/28225737iEf9GSCM.png?alt=media&token=19011766-acfe-463b-9fda-0b7fbbd83375"/>
                        <Card.Title className="text-center" ><Link to={`/fleet/registration/${id}`} className="stretched-link">Registration</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                
                
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{ cars: state.cars.cars}
}


export default  connect(mapStateToProps,null)(CarProfile)