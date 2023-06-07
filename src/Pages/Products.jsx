import React, { useEffect, useState } from 'react'
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import './Login.css';
import ProductCard from '../components/ProductCard';

const Products = () => {

    const [jsonData, setJsonData] = useState([]);

    const handleCardClick = (productId) => {
        window.location.href = `/products/${productId}`;
    };

    useEffect(() => {
        fetch('http://localhost:8080/products_data')
            .then(response => response.json())
            .then(data => setJsonData(data))
            .catch(error => console.error('Error fetching JSON:', error));
    }, []);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/products'>Products Page</Navbar.Brand>
                </Container>
            </Navbar>
            <React.Fragment>

                <div className='login_form'>
                    <Container>
                        <Row xs={1} md={1} lg={2}>
                        {jsonData.map(product => (
                                <Col>
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onClick={() => handleCardClick(product.id)}
                                    />
                                </Col>
                        ))}
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Products