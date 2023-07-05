import React from 'react'

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginPage() {
  return (

    <Container style={{ minHeight: "690px" }}>
    <Row className="py-5 d-flex justify-content-center ">
      <Col sm="12" className="d-flex flex-column ">
        <label className="mx-auto title-login">LOG IN</label>
        <input
          placeholder="Email..."
          type="text"
          className="user-input my-3 text-center mx-auto"
        />
        <input
          placeholder="Password..."
          type="password"
          className="user-input text-center mx-auto"
        />
        <button className="btn-login mx-auto mt-4">login</button>
        <label className="mx-auto my-4">
          Don't have an account?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
            Press here            </span>
          </Link>
        </label>
        <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
          <label className="mx-auto text-center">Admin Account</label>
        </Link>
        <Link to="/user/allOrders" style={{ textDecoration: "none" }}>
          <label className="mx-auto text-center">User Account</label>
        </Link>
      </Col>
    </Row>
  </Container>
 
  )
}

export default LoginPage