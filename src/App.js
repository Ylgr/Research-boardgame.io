
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import TicTacToeBoard from './components/MainGame/TicTacToeBoard'

const TicTacToe = Game({
    setup: () => ({ cells: Array(9).fill(null) }),

    moves: {
        clickCell(G, ctx, id) {
            let cells = [...G.cells]; // don't mutate original state.
            cells[id] = ctx.currentPlayer;
            return { ...G, cells }; // don't mutate original state.
        },
    },

    flow: {
        movesPerTurn: 1,
        endGameIf: (G, ctx) => {
            // if (IsVictory(G.cells)) {
            //     return { winner: ctx.currentPlayer };
            // }
            // if (IsDraw(G.cells)) {
            //     return { draw: true };
            // }
        },
    },


});

const App = Client({
    game: TicTacToe ,
    board: TicTacToeBoard

    // ai: AI({
    //     enumerate: (G, ctx) => {
    //         let moves = [];
    //         for (let i = 0; i < 9; i++) {
    //             if (G.cells[i] === null) {
    //                 moves.push({ move: 'clickCell', args: [i] });
    //             }
    //         }
    //         return moves;
    //     },
    // }),
});

export default App;