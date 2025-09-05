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
            <ol>
                {game.setup.map((setup, index) => (
                    <li key={index}> {setup.name} {setup.value}</li>
                ))}
            </ol>
            <h3>Règles du jeu :</h3>
            <ol>
                {game.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                ))}
            </ol>
            <h3>Etapes du jeu :</h3>
            <ol>
                {game.etapes.map((etapes, index) => (
                    <li key={index}>{etapes}</li>
                ))}
            </ol>
        </div>
    )
}
export default RulesGame;