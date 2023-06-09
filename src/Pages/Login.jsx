import React, { useState } from 'react'
import './Login.css';
import { Navbar, Container, Form, Button } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom';

import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, password }

      axios.post('http://localhost:8080/checkauth', user)
        .then(response => {
          if (response.data[0].loginResponse === 'Successful Login') {
            // successful login
            const loginResponse = response.data[0].loginResponse;
            localStorage.setItem('successMessage', loginResponse);
            // redirect to Product page
            window.location.href = '/products';
          } else {
            // login fail
            alert('Invalid username and password');
            console.log(response.data[0].loginResponse);
          }
        })
        .catch(error => {
          console.error('Login error : ', error);
        });
    };


    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Login Page</Navbar.Brand>
          </Container>
        </Navbar>
        <div className='login_form'>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className='from-label'>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={username}
                  placeholder='Input Username'
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Form.Label className='from-label'>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder='Input Password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className='btn-login'>Login</Button>
            </Form>
          </Container>
        </div>
      </div>
    )
  }

  export default Login;