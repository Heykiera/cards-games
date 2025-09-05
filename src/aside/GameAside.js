
import '../styles/Aside.css';

const GameAside = ({ games }) => {
    
    return(
        <div>
        {games.map((game) => (
            <ol className="Aside-game">
                <button key={game.id} >
                    <img src={game.logo} alt={game.name} height={30}/>
                    <span>{game.name}</span>
                </button>
            </ol>
        ))}
        </div>
    )
}

export default GameAside;