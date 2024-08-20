import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/Aboutus';
import Contact from './components/Contact'; 
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Inicio" element={<HomePage />} />
        <Route path="/Productos" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

