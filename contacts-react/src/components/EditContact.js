import React, { useState, } from 'react'
import { Container, Row, Col, Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const EditContact = () => {

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }


return (
    <Container className='my-5'>
        <Row>  
            <Col className='col-10  mx-auto' >
                <Container fluid className='bg-secondary shadow rounded-4 p-4 ' data-bs-theme="light">
                    <h1 className="text-center">Edit Contact {id}</h1>

                    <Form onSubmit={handleSubmit} >
                        <InputGroup className=' mx-auto'>
                            <FormGroup className='mx-2 mt-3'>
                                <Form.Label className='text-light'>
                                    First Name
                                </Form.Label>
                                <FormControl
                                    value={firstName}
                                    onChange={e=>setFirstName(e.target.value)} 
                                    placeholder='Enter your First name'
                                />
                            </FormGroup>
                            <FormGroup className='mx-2 mt-3'>
                                <Form.Label className='text-light'>
                                    Middle Name
                                </Form.Label>
                                <FormControl
                                    value={middleName}
                                    onChange={e=>setMiddleName(e.target.value)} 
                                    placeholder='Enter your Middle name'
                                />
                            </FormGroup>
                            <FormGroup className='mx-2 mt-3'>
                                <Form.Label className='text-light'>
                                    Last Name
                                </Form.Label>
                                <FormControl
                                    value={lastName}
                                    onChange={e=>setLastName(e.target.value)} 
                                    placeholder='Enter your last name'
                                />
                            </FormGroup>                        
                        </InputGroup>
                        <InputGroup>
                            <FormGroup className='mx-2 mt-3'>
                                <Form.Label className='text-light'>
                                    Number
                                </Form.Label>
                                <FormControl
                                    value={number}
                                    onChange={e=>setNumber(e.target.value)} 
                                    placeholder='Enter Number'
                                />
                            </FormGroup>
                            <FormGroup className='mx-2 mt-3'>
                                <Form.Label className='text-light'>
                                    Email
                                </Form.Label>
                                <FormControl
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)} 
                                    placeholder='Enter Email'
                                />
                            </FormGroup>                        
                        </InputGroup>

                        <FormGroup className='mx-auto text-center mt-4'>
                            <Button type='submit' variant='success'
                            className='p-3 rounded-4 mx-3'>Update Contact</Button>
                            
                            <Button href='/' variant='danger'
                            className='p-3 rounded-4 mx-3'>Cancel</Button>

                        </FormGroup>
                        

                    </Form>
                </Container>
            </Col>
        </Row>
    </Container>
)
}

export default EditContact
