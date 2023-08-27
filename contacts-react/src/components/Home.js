import React from 'react'
import { Button, Card, Col, Container, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const Home = () => {

const contacts = useSelector(state=>state)

const dispatch = useDispatch()

//deletes contact from the reducer
const deleteContact = (id) => {
    dispatch({type: "DELETE_CONTACT", payload: id});
    toast.success("Contact deleted successfully")
}

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
                <Container fluid className='bg-secondary shadow rounded-4 py-1' data-bs-theme="dark">
                    <h1>Contact List</h1>
                </Container>

                <Container fluid className='bg-secondary shadow rounded-4 py-3 mt-3 text-start' data-bs-theme="dark">
                    <Row style={{ flexWrap: 'wrap' }}>
                        {/* renders all contacts saved on the reducer */}
                        {contacts.map((contact, id) => (
                            <Col key={id} className='col-4' style={{ marginBottom: '15px' }}>
                                <Card className='my-2 h-100'>
                                    <Card.Header>
                                        <InputGroup>
                                            <InputGroup.Text className='border-0 bg-transparent'>{contact.firstName}</InputGroup.Text>
                                            <InputGroup.Text className='border-0 bg-transparent'>{contact.middleName}</InputGroup.Text>
                                            <InputGroup.Text className='border-0 bg-transparent'>{contact.lastName}</InputGroup.Text>
                                        </InputGroup>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>Number:</Card.Text>
                                        <Card.Text>{contact.number}</Card.Text>
                                        <Card.Text>Email:</Card.Text>
                                        <Card.Text>{contact.email}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className='text-center'>
                                        {/* navigate to edit page when clicked */}
                                        <Button variant="primary" className='mx-1'href={`/edit/${contact.id}`}>
                                            Edit
                                        </Button>
                                        {/* deletes a contact */}
                                        <Button variant="danger" className='mx-1' onClick={()=> deleteContact(contact.id)}>
                                            Delete
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </Col>
        </Row>
    </Container>
    )
}

export default Home
