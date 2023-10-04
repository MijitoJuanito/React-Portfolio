import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';








function App() {
  return <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path ="/" element={<AboutMe />} />
        <Route path ="/portfolio" element={<Projects />} />
        <Route path ="/project/:id" element={<ProjectDisplay />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  </div>;
}

export default App;
