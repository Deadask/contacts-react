import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const contacts = useSelector((state)=> state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    // Add Contact to the reducer
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // validation checks for required fields
        const checkEmail = contacts.find((contact) => contact.email === email);
        
        
        const checkNumber = contacts.find((contact) => contact.number === number);
       
        
        // checks if any field are empty
        if (!firstName || !lastName || !email || !middleName || !number) {
            return toast.warning("Please fill in all fields");
        }
        // if email exists, warn to change email
        if (checkEmail) {
            return toast.warning("This email already exists");
        }
        // if number exists, warn to change number
        if (checkNumber) {
            return toast.warning("This number already exists");
        }
    
    // data to be pushed into the list of contacts
    const data ={
        id: `${parseInt(contacts[contacts.length - 1].id) + 1}`,
        firstName,
        middleName,
        lastName,
        email,
        number
    };
    // Add the contact thru the reducer using dispatcher
    dispatch({type: "ADD_CONTACT",payload: data});
    toast.success("Contact added");
    navigate('/');
    };
    
return (
    <Container className='my-5'>
        <Row>  
            <Col className='col-10  mx-auto' >
                <Container fluid className='bg-secondary shadow rounded-4 p-4 ' data-bs-theme="light">
                    <h1 className="text-center">Add Contact</h1>

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
                            className='p-3 rounded-4'>Add Contact</Button>
                        </FormGroup>
                        

                    </Form>
                </Container>
            </Col>
        </Row>
    </Container>
)
}

export default AddContact
