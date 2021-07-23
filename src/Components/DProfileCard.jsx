import { Modal,Button } from "react-bootstrap"
import React from "react"
import { Link } from "react-router-dom"

const DProfileCard=()=>{
    return(
        <Modal>
            <Modal.Body>
                <h1>Profile</h1>
                <Link to="#" className="stretched-link"><Button variant="primary" block>Full Profile</Button></Link>
            </Modal.Body>
        </Modal>
    )
}
export default DProfileCard