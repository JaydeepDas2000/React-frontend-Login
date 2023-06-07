import React, { useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/products_data/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/products'>Products Page</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <h1>{product.product_name}</h1>
                <img src={"../" + product.product_img} alt={product.product_name} width="200px" />
                <p>{product.description}</p>
            </Container>
        </div>
    );
};

export default ProductDetails;