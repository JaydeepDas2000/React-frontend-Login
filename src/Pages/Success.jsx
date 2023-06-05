import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import './Login.css';

const Success = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Success Page</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='login_form'>
                <Container>
                    <h1>Successful login, yahoo</h1>
                </Container>
            </div>
        </div>
    )
}

export default Success