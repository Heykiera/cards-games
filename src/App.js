import { useState } from 'react';
import GameAside from './aside/GameAside';
import RulesGame from './pages/RulesGame';
import './styles/App.css';
import Games from './components/games.json';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const game = Games.find((game) => game.id === selectedGame);

  return (
    <div className="App">
      <aside className="App-aside">
        <GameAside games={Games} onSelect={setSelectedGame} />
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
