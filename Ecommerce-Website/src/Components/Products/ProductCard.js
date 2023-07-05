import React from 'react'
import { Col , Card } from 'react-bootstrap'
import prod1 from '../../images/prod1.png'
import favoff from '../../images/fav-off.png'
import rate from '../../images/rate.png'

function ProductCard() {
  return (
    <Col
        xs="6"
        sm="6"
        md="4"
        lg="3"
        className='d-flex my-2' >


        <Card style={{  width: '100%' ,
                        height: '345px' ,
                        borderRadius: '8px' ,
                        border : 'none' ,
                        backgroundColor : '#ffffff' ,
                        boxShadow : "0px 2px 2px 0px rgba( 151 , 151 , 151 , 0.5 )"  ,
                        }}>
            <Card.Img style={ { width: '100%' , height : '65%' } } src={prod1} />
            <div className='d-flex justify-content-end mx-2'> 
                <img 
                    src={favoff} 
                    alt="" 
                    className='text-ceenter' 
                    style={
                    {
                        height:'24px', 
                        with : '26px'
                    }
                } />
                
                </div>
                <Card.Body>
                <p className='card-title'>Lorem ipsum dolor sit amet consectetur.</p>
                <Card.Text>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img 
                                    className='' 
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px" /> 
                                    <div className='card-rate mx-2' >4.5</div>
                            </div>
                            <div className='d-flex'>
                                <div className='card-price'>880</div>
                                <div className='card-currency mx-1'>Dollars</div>
                            </div>
                        </div>

                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductCard