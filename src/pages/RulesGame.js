const RulesGame = ({ game }) => {
    return(
        <div className="RulesGame">
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <h3>Règles du jeu :</h3>
            <ol>
                {game.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                ))}
            </ol>
        </div>
    )
}
export default RulesGame;