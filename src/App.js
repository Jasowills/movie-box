import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use the element prop */}
        <Route path="/movies/:id" element={<MovieDetails />} /> {/* Use the element prop */}
      </Routes>
    </Router>
  );
}

export default App;
