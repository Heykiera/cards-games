import { Link } from "react-router-dom";
import '../styles/AsideGames.css';

const GameAside = ({ games, onSelect, setOpen, isOpen}) => {
    
    return(
        <>
            <header className="Aside-header">
                <Link to={`/`} key={''} className="Aside-reset">
                    <button className="Aside-btn">
                        <img src="/assets/png/game-die-svgrepo-com.png" alt="games rule's" />
                        <span>Liste de jeux</span>                                              
                    </button>
                </Link>
                <button className="Aside-btn">
                    <img src="/assets/settings.svg" alt="settings" />
                    <span>Paramètres</span>
                </button>
            </header>
            <section className='Aside-game'>
                {games.map((game) => (
                    <Link to={`/${encodeURIComponent(game.name)}`} key={game.id} className="list-game">
                        <button>
                            <img src={game.logo} alt={game.name} />
                            <span>{game.name}</span>                                              
                        </button>
                    </Link>  
                ))}
            </section>
            <div className='Aside-btn'>
                <button className="toggle-btn" onClick={() => setOpen(!isOpen)}>
                {isOpen ? "←" : "→"}
                </button>
            </div>
        </>
    )
}

export default GameAside;