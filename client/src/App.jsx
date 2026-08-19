import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './Components/TopNav';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

// Pages
import Home from './Pages/Home';
import Volumes from './Pages/Volumes';
import AimScope from './Pages/AimScope';
import EthicalIssues from './Pages/EthicalIssues';
import ForAuthors from './Pages/ForAuthors';
import Indexing from './Pages/Indexing';
import Announcements from './Pages/Announcements';
import Advertisements from './Pages/Advertisements';
import EditorialBoard from './Pages/EditorialBoard';
import SubmitPaper from './Pages/SubmitPaper';
import Reviewers from './Pages/Reviewers';
import PublicationFee from './Pages/PublicationFee';
import ContactUs from './Pages/ContactUs';
import Publisher from './Pages/Publisher';
import PMSL from './Pages/PMSL';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <TopNav />
        <Header />
        <NavBar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volumes" element={<Volumes />} />
            <Route path="/aim-scope" element={<AimScope />} />
            <Route path="/ethical-issues" element={<EthicalIssues />} />
            <Route path="/for-authors" element={<ForAuthors />} />
            <Route path="/indexing" element={<Indexing />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/advertisements" element={<Advertisements />} />
            <Route path="/editorial-board" element={<EditorialBoard />} />
            <Route path="/submit-paper" element={<SubmitPaper />} />
            <Route path="/reviewers" element={<Reviewers />} />
            <Route path="/publication-fee" element={<PublicationFee />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/publisher" element={<Publisher />} />
            <Route path="/pmsl" element={<PMSL />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
