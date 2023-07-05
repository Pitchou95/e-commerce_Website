import React from 'react'
import { Card, Col } from 'react-bootstrap'


function BrandCard({img}) {
  return (
    <Col
        xs="6" 
        sm="6"
        md="4"
        ls="2" 
        className='my-1 d-flex justify-content-center'
        style={ { width : "210px" } } >
        <Card   className='my-0'
                style={ {
                    width : "100%" ,
                    height : "151px" ,
                    borderRadius : "8px" ,
                    border : "none" ,
                    backgroundColor : "#FFFFFF"
                } } >
                <Card.Img style={ { width : '100%' , height : '151px' } } src={img} />
        </Card>
        </Col>
  )
}

export default BrandCard