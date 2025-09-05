import { useState } from 'react';
import GameAside from './aside/GameAside';
import RulesGame from './pages/RulesGame';
import './styles/App.css';
import Games from './components/games.json';

function App() {
  const SelectedGame = useState(null)

  return (
    <div className="App">
      <aside className="App-aside">
        <GameAside games={Games} onSelect={SelectedGame}/>
      </aside>
      <header className="App-header">
      </header>
      <main className="App-main">
        {
          Games.map((game) => (
            <RulesGame key={game.id} game={game}/>
          ))
        }
      </main>
      <footer className="App-footer">
        <span>© 2025 - Delente Dylan</span>
      </footer>
    </div>
  );
}

export default App;
