import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './Components/TopNav';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Volumes from './Pages/Volumes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TopNav />
        <Header />
        <NavBar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volumes" element={<Volumes />} />
            {/* Add placeholders for other routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
