import React from 'react';
import NavBar from './Navbar';
import Header from './Header';
import SellNFT from './SellNFT';
import NFTShop from './NFTShop';
import BestSellers from './BestSellers';
import Footer from './Footer';
import Statistics from './Statistics'; 
import './App.css';


function Main() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <SellNFT />
      <NFTShop />
      <BestSellers />
      <Statistics/>
      <Footer />
    </div>
  );
}

export default Main;
