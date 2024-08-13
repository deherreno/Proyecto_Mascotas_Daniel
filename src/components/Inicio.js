import React from 'react';
import '../styles/Inicio.css'; // Si necesitas estilos personalizados
import ProductList from './ProductList';

function Inicio() {
  return (
    <div>
      <h1>Bienvenido a Omega Petshop</h1>
      <p>Explora nuestra selección de productos para tus mascotas.</p>
      <ProductList />
    </div>
  );
}

export default Inicio;


