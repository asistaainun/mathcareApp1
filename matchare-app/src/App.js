import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import ProductDiscovery from './components/ProductDiscovery/ProductDiscovery';
import ProductDetail from './components/ProductDetail/ProductDetail';
import IngredientDetail from './components/IngredientDetail/IngredientDetail';
import Routine from './components/Routine/Routine';
import Footer from './components/Footer/Footer';
import { MOCK_DATA } from './data/mockData';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [userProfile, setUserProfile] = useState(MOCK_DATA.user);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentPage('productDetail');
    window.scrollTo(0, 0);
  };

  const openIngredientDetail = (ingredient) => {
    setSelectedIngredient(ingredient);
    setCurrentPage('ingredientDetail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} openProductDetail={openProductDetail} openIngredientDetail={openIngredientDetail} />;
      case 'quiz':
        return <Quiz navigateTo={navigateTo} userProfile={userProfile} setUserProfile={setUserProfile} />;
      case 'discover':
        return <ProductDiscovery navigateTo={navigateTo} openProductDetail={openProductDetail} userProfile={userProfile} />;
      case 'productDetail':
        return <ProductDetail product={selectedProduct} navigateTo={navigateTo} openProductDetail={openProductDetail} openIngredientDetail={openIngredientDetail} />;
      case 'ingredientDetail':
        return <IngredientDetail ingredient={selectedIngredient} navigateTo={navigateTo} openProductDetail={openProductDetail} />;
      case 'routine':
        return <Routine navigateTo={navigateTo} userProfile={userProfile} openProductDetail={openProductDetail} />;
      case 'ingredients':
        return <ProductDiscovery navigateTo={navigateTo} openProductDetail={openProductDetail} openIngredientDetail={openIngredientDetail} userProfile={userProfile} />;
      default:
        return <Home navigateTo={navigateTo} openProductDetail={openProductDetail} openIngredientDetail={openIngredientDetail} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="App-main">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;