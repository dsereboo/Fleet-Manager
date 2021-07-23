import React, { useEffect } from "react"
import { Container, Row,} from "react-bootstrap"
import { connect } from "react-redux"
import { getCars } from "../Actions/fleetActions"
import CarCard from "./CarCard"

const Fleet=(props)=>{

    useEffect(
        ()=>{ props.getCars()},
        [props]
    )
    return(
        <Container className="custom-container">
            <Row>
               {props.cars.map(
                   car=>(<CarCard carInfo={car} key={car.id}/>)
               )}
            </Row>
            
            
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{ cars: state.cars.cars}
}

const mapDispatchToProps={
    getCars,
}

export default connect(mapStateToProps, mapDispatchToProps)(Fleet)