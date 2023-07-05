import React from 'react'
import { NavbarLogin } from '../../Components/Utility/NavbarLogin'
import { Slider } from '../../Components/Home/Slider'
import HomeCategory from './HomeCategory'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeature from '../../Components/Brands/BrandFeature'
import Footer from '../../Components/Utility/Footer'


export const HomePage = () => {
  return (
    <div className='font' style={ { minHeight : '670px' } } >
        <Slider />
        <HomeCategory />
        <CardProductContainer title='Best Selling' btntitle='More' />
        <DiscountSection /> 
        <CardProductContainer title='Latest Fashion' btntitle='More' />
        <BrandFeature title="Brands" btntitle="More" />
    </div>
  )
}
