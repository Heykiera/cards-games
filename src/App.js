import { useState, useEffect } from 'react';
import GameAside from './aside/GameAside';
import RulesGame from './pages/RulesGame';
import './styles/App.css';
import Games from './components/games.json';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const game = Games.find((game) => game.id === selectedGame);

  useEffect(() => {
    // à chaque changement de jeu → remonter en haut
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [game]); // dépendance sur game
  
  return (
    <div className={`App ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <aside className="App-aside">
        <GameAside games={Games} onSelect={setSelectedGame} setOpen={setIsOpen} isOpen={isOpen} />
      </aside>
      <main className="App-main">
        <RulesGame game={game} />
      </main>
      <footer className="App-footer">
        <span>© 2025 - Delente Dylan</span>
      </footer>
    </div>
  );
}

export default App;
