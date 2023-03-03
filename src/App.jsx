import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { GifsProvider } from './contexts/GifsContext';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
      <Router>
        <GifsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </GifsProvider>
      </Router>
    </>
  );
}

export default App;
