import React from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import CategoryCard from '../../Components/Category/CategoryCard'
import SubTitle from '../../Components/Utility/SubTitle'
import imgCard from '../../images/clothe.png'

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title='Category' btntitle='More' linkPath='/allcategory' />
      <Row className='d-flex justify-content-between align-items-center pb-5 ' >
         <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
         <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
         <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
         <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
         <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
         <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
      </Row>
    </Container>
  )
}

export default HomeCategory ;
