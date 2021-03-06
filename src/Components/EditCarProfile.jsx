import React,{useState,useEffect} from "react"
import {Container,Row,Col,Image, Form} from "react-bootstrap"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

const EditCarProfile=(props)=>{

    // const[user, setUser]=useState({
    //     id:props.userData.id,
    //     name:props.userData.name, 
    //     age:props.userData.age, 
    //     grade:props.userData.grade,
    // })

    // const handleChange=(event)=>{
    //     setUser({...user, [event.target.name]:event.target.value}) 
     
    // }

    // const handleSubmit=(event)=>{
    //     event.preventDefault()
    //     props.editUser(user,user.id)
    //     props.handleClose()
    // }

    const{id}=useParams()


    const[chosenCar,setChosenCar]=useState({})
    const findCar=()=>{
        let car=(props.cars.filter((item)=>item.id===id))
        setChosenCar(car[0])
    }
    

    useEffect(findCar)
    return(
        <Container className="custom-container">
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
                <Col md={{span:4}}>
                    <h4>Registration</h4>
                </Col>
                <Col md={{span:8}}>
                    <Form>
                        <Form.Group as={Row}>
                           <Form.Label column md="3" xs="4">Car No.</Form.Label> 
                           <Col md="9" xs="8">
                                <Form.Control value={chosenCar.id} plaintext type="text" />
                           </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                           <Form.Label column md="3" xs="4">Car Make.</Form.Label> 
                           <Col md="9" xs="8">
                                <Form.Control value={`${chosenCar.manufacturer} ${chosenCar.carModel}`} plaintext type="text" />
                           </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                           <Form.Label column md="3" xs="4">Model Year</Form.Label> 
                           <Col md="9" xs="8">
                                <Form.Control value={chosenCar.modelYear} plaintext type="text" />
                           </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                           <Form.Label column md="3" xs="4">Chasis Number</Form.Label> 
                           <Col md="9" xs="8">
                                <Form.Control value={chosenCar.chasisNumber} plaintext type="text" />
                           </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <hr/>
             <Row>
                <Col md={{span:4}}>
                    <h4>Ownership</h4>
                </Col>
                <Col md={{span:8}}>
                    <Form>
                        <Form.Group as={Row}>
                           <Form.Label column md="3" xs="4">Name</Form.Label> 
                           <Col md="9" xs="8">
                                <Form.Control placeholder="GR 5756 Z" plaintext type="text" />
                           </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                           <Form.Label column md="3" xs="4">Name</Form.Label> 
                           <Col md="9" xs="8">
                                <Form.Control placeholder="GR 5756 Z" plaintext type="text" />
                           </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md={{span:4}}>
                    <h4>Driver</h4>
                </Col>
                <Col md={{span:8}}>
                    <Form>
                        <Form.Group as={Row}>
                           <Form.Label column md="3" >Car No.</Form.Label> 
                           <Col md="9">
                                <Form.Control placeholder="GR 5756 Z" plaintext type="text" />
                           </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                           <Form.Label column md="3">Car Make.</Form.Label> 
                           <Col md="9">
                                <Form.Control placeholder="GR 5756 Z" plaintext type="text" />
                           </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                           <Form.Label column md="3">Model Year</Form.Label> 
                           <Col md="9">
                                <Form.Control placeholder="GR 5756 Z" plaintext type="text" />
                           </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                           <Form.Label column md="3">Chasis Number</Form.Label> 
                           <Col md="9">
                                <Form.Control placeholder="GR 5756 Z" plaintext type="text" />
                           </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row> 
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return { cars: state.cars.cars}
}



export default connect(mapStateToProps,null)(EditCarProfile)