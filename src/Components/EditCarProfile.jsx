import React from "react"
import {Container,Row} from "react-bootstrap"
import { useParams } from "react-router-dom"

const EditCarProfile=(props)=>{

    const{id}=useParams()
    return(
        <Container>
            <Row>

                <h1>{id}</h1>
            </Row>
        </Container>
    )
}
export default EditCarProfile