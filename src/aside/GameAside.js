import '../styles/AsideGames.css';

const GameAside = ({ games, onSelect, setOpen, isOpen}) => {
    
    return(
        <>
            <section className='Aside-game'>
                {games.map((game) => (
                    <div className="list-game">
                        <button key={game.id} onClick={() => onSelect(game.id)}>
                            <img src={game.logo} alt={game.name} />
                            <span>{game.name}</span>                    
                        </button>
                    </div>
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