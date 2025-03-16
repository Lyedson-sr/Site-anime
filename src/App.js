import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mangas from './pages/Mangas';
import Contact from './pages/Contact';
import MangaDetails from './pages/MangaDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mangas" element={<Mangas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/manga/:id" element={<MangaDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;