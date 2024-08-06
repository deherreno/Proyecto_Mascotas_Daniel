import React from 'react';
import '../styles/ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}

export default ProductItem;
