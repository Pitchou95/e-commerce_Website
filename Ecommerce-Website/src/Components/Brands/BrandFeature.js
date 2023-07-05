import React from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import SubTitle from '../../Components/Utility/SubTitle'
import BrandCard from './BrandCard';
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'

function BrandFeature({title , btntitle}) {
  return (
    <Container>
    <SubTitle title={title} btntitle={btntitle} linkPath='/allbrand' />
    <Row className='d-flex justify-content-between my-0' >
       <BrandCard img={brand1}  />
       <BrandCard img={brand2}  />
       <BrandCard img={brand3}  />
       <BrandCard img={brand2}  />
       <BrandCard img={brand1}  />
       <BrandCard img={brand3}  />
    </Row>
  </Container>
  )
}

export default BrandFeature