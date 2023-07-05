import React from 'react'
import { Container, Row } from 'react-bootstrap'
import imgCard from '../../images/clothe.png'
import CategoryCard from '../../Components/Category/CategoryCard'

function CategoryContainer() {
  return (
    <Container>
    <div className='admin-content-text'>Category</div>
        <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
            <CategoryCard title="Solde" background="#3F6183" img={imgCard} />
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

export default CategoryContainer