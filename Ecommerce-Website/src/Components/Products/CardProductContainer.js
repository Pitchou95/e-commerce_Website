import React from 'react'
import ProductCard from './ProductCard'
import { Row , Container} from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'

function CardProductContainer({title , btntitle}) {
  return (
    <Container>
    <SubTitle title={title} btntitle={btntitle} />
    <Row className='d-flex justify-content-between align-items-center pb-5 ' >
       <ProductCard title="Solde" background="#3F6183" />
       <ProductCard title="Solde" background="#3F6183" />
       <ProductCard title="Solde" background="#3F6183" />
       <ProductCard title="Solde" background="#3F6183" />
    </Row>
  </Container>
  )
}

export default CardProductContainer