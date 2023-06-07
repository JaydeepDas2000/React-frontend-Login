import React from 'react';

const ProductCard = ({ product, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={product.product_img} alt={product.product_name} width="200px"/>
            <h3>{product.product_name}</h3>
        </div>
    );
};

export default ProductCard;