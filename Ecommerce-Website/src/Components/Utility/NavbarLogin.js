import React from 'react'
import './navbarLogin.css'
import logo from '../../images/logo.png'
import Container from 'react-bootstrap/Container';
// import FontAwesomeIcon from 'react-bootstrap'

export const NavbarLogin = () => {
  return (
    <div className='navbar'>
    <Container>
        <div class='nav-content'>
            <a href="/">
                <img className='nav-logo' src={logo} alt="" />
            </a>
            <form className='nav-form'>
                <i class="fa fa-magnifying-glass"></i>
                <input class='search-input' type='text' placeholder='Search' />
            </form>
            <div className='nav-links'>
                <a href='/card'><i class="fa fa-bag-shopping"></i></a>
                <a href='/login'><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
    </Container>
      
    </div>
  )
}
