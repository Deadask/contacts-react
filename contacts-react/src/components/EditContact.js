import React, { useEffect, useState, } from 'react'
import { Container, Row, Col, Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Error from './Error'
import { toast } from 'react-toastify'
const EditContact = () => {

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const contacts = useSelector(state=>state)
    // checks the current contact being edited
    const currentContact = contacts.find(contact=> contact.id === id )
    // if current contact exists, save the currentContact to the data to be updated
    useEffect(()=> {
        if (currentContact) {
            setFirstName(currentContact.firstName);
            setMiddleName(currentContact.middleName);
            setLastName(currentContact.lastName);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
            
        }
    },[currentContact])

    // handle the update
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // checks if the id and email exists, if id exists and email exists, then return a warning
        const checkEmail = contacts.find((contact) => contact.id!== id && contact.email === email);
        
        // checks if the id and number exists, if id exists and number exists, then return a warning
        const checkNumber = contacts.find((contact) => contact.id!== id && contact.number === number);
       
        
        // all fields must be filled
        if (!firstName || !lastName || !email || !middleName || !number) {
            return toast.warning("Please fill in all fields");
        }

        // toast warning if email exists
        if (checkEmail) {
            return toast.warning("This email already exists");
        }
        // toast warning if number exists
        if (checkNumber) {
            return toast.warning("This number already exists");
        }
    
    // updated data to be pushed
    const data ={
        id: id,
        firstName,
        middleName,
        lastName,
        email,
        number
    };

    // update request
    dispatch({type: "UPDATE_CONTACT",payload: data});
    toast.success("Contact updated successfully");
    navigate('/');
    };


return (
    (currentContact)? 
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
        :
    <Error/>
    
)
}

export default EditContact
