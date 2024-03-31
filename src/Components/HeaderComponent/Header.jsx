import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosInformationCircleOutline } from "react-icons/io";

const Header = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <div>
                        <p style={{fontWeight:'500',fontSize:'30px',display:'inline'}}>Drawdown Periods</p>
                        <IoIosInformationCircleOutline style={{marginLeft:'4px',marginBottom:'10px'}} size={25} color='gray'/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header
