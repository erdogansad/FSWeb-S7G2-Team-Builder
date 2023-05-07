import React from 'react'
import { Col, Row } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='mt-auto'>
      <Row className='bg-dark m-0 p-4 text-center text-light'>
        <Col>
          <span>Copyright 2023 | Workintech</span>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer