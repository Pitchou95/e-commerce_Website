import React from 'react'
import { Col } from 'react-bootstrap' 

const CategoryCard = ({ background , img , title }) => {
  return (
    <Col
        lg='2'
        md='4'
        sm='6'
        xs='6'
        className='d-flex justify-content-around my-4'>
        <div className='allCard mb-5 '>
            <div
                className='categoty-card'
                style={{ backgroundColor : `${background}` }} ></div>{" "}
                <img alt="zcv" src={img} className="categoty-card-img" />
                <p className='categoty-card-text my-2'>{title}</p>
        </div>
    </Col>
  )
}

export default CategoryCard ;
