import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
    