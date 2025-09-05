
import '../styles/Aside.css';

const GameAside = ({ games }) => {
    
    return(
        <div>
        {games.map((game) => (
            <div key={game.id} className="Aside-game">
                <img src={game.logo} alt={game.name} height={30}/>
                <span>{game.name}</span>
            </div>
        ))}
        </div>
    )
}

export default GameAside;