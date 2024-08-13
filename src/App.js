import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
// Importa otros componentes necesarios

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Inicio" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Agrega otras rutas aquí */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
