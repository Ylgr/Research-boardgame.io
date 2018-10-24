const Game = require('boardgame.io/core').Game;
const QnAGame = Game({
    name: 'QnA',
    setup: () => ({
        score: Number(0),
    }),
    moves: {
        answer(G,ctx,bool) {
            console.log(`${G.score}! have ${ctx.currentPlayer}!`);
            if(bool)
            {
                return {score:G.score + 1};
            }
            return {score:G.score};
        },
    },
    flow: {
        movesPerTurn: 1,
        endGameIf : (G,ctx) => {
            if(G.score === 5){
                console.log(`${ctx.currentPlayer} winner!`);
                return { winner: ctx.currentPlayer };
            }
        },
    },
});
export default QnAGame;
// module.exports = { QnAGame };
