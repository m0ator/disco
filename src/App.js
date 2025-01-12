import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Stories from './pages/Stories/Stories';
import StoryDetail from './pages/Stories/StoryDetail';
import Integrity from './pages/Integrity/Integrity';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/integrity" element={<Integrity />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<StoryDetail />} />
          <Route path="/products/*" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 