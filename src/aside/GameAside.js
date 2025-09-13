import { Link } from "react-router-dom";
import '../styles/AsideGames.css';

const GameAside = ({ games, onSelect, setOpen, isOpen}) => {
    
    return(
        <>
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