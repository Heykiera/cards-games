const RulesGame = ({ game }) => {
    function formatPlayers(players) {
            if (!players || players.length === 0) return "";
            if (players.length === 1) return `${players[0]} joueurs`;
        return `entre ${players[0]} et ${players[1]} joueurs`;
    }

    if (!game) {
        return (
            <header className="no-game-selected">
                <h1>Sélectionne un jeu dans la liste pour voir ses règles.</h1>
            </header>
    )
    }
    return(
        <div className="RulesGame">
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <h3>setup :</h3>
            <div className="game-setup">
                <div className="game-material">
                    {game.material.map((material, index)=> (
                    <div key={index}>
                        <p>{material.name} x{material.count} ({material.effect}) </p>
                        <img src={material.img} alt="objet" height={30}/>
                    {index < game.material.length - 1 ? '' : ''}</div>
                ))}                    
                </div>
                <div className="game-players">
                    <div>
                        <p>{formatPlayers(game.playeurs)}</p>
                        <img src= {game.img} alt="joueurs" height={30} />
                    </div>
                </div>
                <div className="game-items">
                {game.setup.map((setup, index) => (
                    <div key={index}>
                        <p> {setup.name} {setup.value}</p>
                        <img src={setup.img} alt="objet nécessaire" height={30}/>
                    {index < game.setup.length - 1 ? '' : ''}</div>
                ))}
                </div>
                
            </div>
            <h3>Règles du jeu :</h3>
            <div className="game-rule">
                <p>
                    {game.rules.map((rule, index) => (
                        <p key={index}>{rule}</p>
                    ))}
                </p>
            </div>
            <h3>Etapes du jeu :</h3> 
            <div className="game-step">   
                <p>
                    {game.steps.map((steps, index) => (
                        <p key={index}>{steps}</p>
                    ))}
                </p>
            </div>
        </div>
    )
}
export default RulesGame;