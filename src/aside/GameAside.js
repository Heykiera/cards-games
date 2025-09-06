
import '../styles/Aside.css';

const GameAside = ({ games, onSelect, setOpen, isOpen}) => {
    
    return(
        <div>
        {games.map((game) => (
            <ol className="Aside-game">
                <button key={game.id} onClick={() => onSelect(game.id)}>
                    <img src={game.logo} alt={game.name} height={30}/>
                    <span>{game.name}</span>                    
                </button>
            </ol>
        ))}
        <div className='space'></div>
        <button className="toggle-btn" onClick={() => setOpen(!isOpen)}>
          {isOpen ? "←" : "→"}
        </button>
        </div>
    )
}

export default GameAside;