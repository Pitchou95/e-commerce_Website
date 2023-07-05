import React from 'react'
import { Col, Container , Row } from 'react-bootstrap'
import laptop from '../../images/laptops.png'

function DiscountSection() {
  return (
    <Container className='discountPub'>
        <Row classname='discount-backcolor  my-3 mx-2 d-flex text-center align-items-center' >
                <Col sm='6'>
                    <div className='discount-title'>
                        discount up to 30% for laptop
                    </div>
                </Col>
                <Col sm='6'>
                    <img src={laptop} className='dicount-img' />
                </Col>
        </Row>
    </Container>
  )
}

export default DiscountSection