const RulesGame = ({ game }) => {

    if (!game) {
        return (
            <header>
                <h1>Sélectionne un jeu dans la liste pour voir ses règles.</h1>
            </header>
    )
    }
    return(
        <div className="RulesGame">
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <h3>setup :</h3>
            <ul>
                {game.setup.map((setup, index) => (
                    <li key={index}> {setup.name} {setup.value}</li>
                ))}
            </ul>
            <h3>Règles du jeu :</h3>
            <ul>
                {game.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                ))}
            </ul>
            <h3>Etapes du jeu :</h3>
            <ul>
                {game.etapes.map((etapes, index) => (
                    <li key={index}>{etapes}</li>
                ))}
            </ul>
        </div>
    )
}
export default RulesGame;