import React from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

function ProductList() {
  const products = [
    { id: 1, name: ' 2 KG De Comida De Perro', price: '$ 76.809', description: 'El concentrado Chunky para perros adultos con pollo y arroz ofrece nutrición completa, favorece la salud, piel, pelaje y digestión.', image: 'https://www.agrocampo.com.co/media/catalog/product/cache/d51e0dc10c379a6229d70d752fc46d83/1/1/111100174-v1-min.jpg' },
    { id: 2, name: '500 mg De Comida De Gato', price: '$7.950', description: 'El alimento Donkat Adulto para gatos, nutritivo y delicioso, satisface todas las necesidades nutricionales de tu felino.', image: 'https://lh3.googleusercontent.com/CYoCRPdCHBvlzCDc1ugw_G-UQCNLgt-2o_E6Cw7MZ2ohU79Lw4A3Qst9dtPZ17m6b38lJxIKy-eSlaHGDYnhREWqMAHUHasntSMdz8Y6DuYsJSE=s650-rw' },
    { id: 3, name: 'Pañitos Humedos Para Mascotas', price: '$5.850', description: 'El alimento Donkat Adulto para gatos, nutritivo y delicioso, satisface todas las necesidades nutricionales de tu felino.', image: 'https://images.ctfassets.net/ozvjkvyngwhv/5zF8WI4V0o946EKF4dcPIm/a76a963ec9d802116a2dad0ddf10a066/x50-PAN__ITOS-LIMPIEZA-ESENCIAL.png' },
    { id: 4, name: 'Pañitos HumeCama para Perro Grande', price: '$120.000', description: 'Cama acolchada de tamaño grande para perros, ideal para ofrecer comodidad y descanso. Fabricada con materiales resistentes y lavables.', image:'https://www.agrocampo.com.co/media/catalog/product/cache/d51e0dc10c379a6229d70d752fc46d83/3/0/303022004_ed-min.jpg'},

  ];

  return (
    <section className="product-list">
      <div className="container">
        <h2>Nuestros Productos</h2>
        <div className="products">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );  
} 

export default ProductList; 
