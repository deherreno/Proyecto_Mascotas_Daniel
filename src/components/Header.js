import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirige a la página de resultados de búsqueda
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/Inicio">
            <img 
              src="https://omegapet.es/wp-content/uploads/2021/01/OMEGAPET_LOGO_RGB.png" 
              alt="Omega Petshop" 
              className="logo-image"
            /> 
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/Inicio">Inicio</Link></li> 
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/aboutus">Acerca de nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Registro</Link></li>
          </ul>
        </nav>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <img src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-search-flat-orange-color-icon-pictogram-magnify-glass-vector-picture-image_9756745.png" alt="Buscar" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
