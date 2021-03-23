const gameData = [
    {
        id: 4,
        name: "charmander"
    },
    {
        id: 7,
        name: "squirtle"
    },
    {
        id: 13,
        name: "weedle"
    },
    {
        id: 25,
        name: "pikachu"
    },
    {
        id: 39,
        name: "jigglypuff"
    },
    {
        id: 95,
        name: "onix"
    }
]

const generatingRandomCards = (value) => {
    let newGameData = [...gameData]
    switch(value) {
        case 4:
            newGameData.splice(4, 2)
            break

        case 5:
            newGameData.splice(5, 1)
            break

        case 6:
            newGameData.splice(5, 0)
            break
    }

    const gameCards = [...newGameData, ...newGameData]


    function shuffleCards() {
        for (let i = gameCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
        }

        return gameCards;
    }

    return shuffleCards()
}

export default generatingRandomCards;