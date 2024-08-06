import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
        <a href="../App.js">
        <img 
            src="https://omegapet.es/wp-content/uploads/2021/01/OMEGAPET_LOGO_RGB.png" 
            alt="Omega Petshop" 
            className="logo-image"
          /> 
        </a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="a">Inicio</a></li>
            <li><a href="a">Productos</a></li>
            <li><a href="a">Acerca de nosotros</a></li>
            <li><a href="a">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
