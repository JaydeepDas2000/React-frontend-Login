import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import './Login.css';

const Products = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Products Page</Navbar.Brand>
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

export default Products