import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
        <Row className='text-end my-3'>
            <Col>
                <Button href='/add'
                variant='secondary' data-bs-theme="dark"
                className='shadow rounded-pill p-3'>Add Contact</Button>
            </Col>
        </Row>
        <Row className="text-center">  
            <Col>
                <Container fluid className='bg-secondary shadow rounded-4' data-bs-theme="dark">
                    <h1>Contact List</h1>
                </Container>
            </Col>
        </Row>
    </Container>
  )
}

export default Home
