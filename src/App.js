
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Sok from './components/Sok';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="app">
          <Header />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sok" element={<Sok />} />
        </Routes>
        <div className="app">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
