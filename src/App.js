import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameAside from './aside/GameAside';
import RulesGame from './pages/RulesGame';
import './styles/App.css';
import Games from './components/games.json';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <Router>
      <div className={`App ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <aside className="App-aside">
          <GameAside games={Games} setOpen={setIsOpen} isOpen={isOpen} />
        </aside>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<p>Sélectionne un jeu</p>} />
            <Route path="/:name" element={<RulesGame games={Games} />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <span>© 2025 - Delente Dylan</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;
