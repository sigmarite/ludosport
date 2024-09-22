import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoolPage from './pages/PoolsPage';
import GlobalRanksPage from './pages/GlobalRanksPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pools" element={<PoolPage />} />
        <Route path="/global-ranks" element={<GlobalRanksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
