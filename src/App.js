
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import TicTacToeBoard from './components/MainGame/TicTacToeBoard'
import { AI } from 'boardgame.io/ai';

// Return true if `cells` is in a winning configuration.
function IsVictory(cells) {
    const positions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let pos of positions) {
        const symbol = cells[pos[0]];
        let winner = symbol;
        for (let i of pos) {
            if (cells[i] !== symbol) {
                winner = null;
                break;
            }
        }
        if (winner != null) return true;
    }

    return false;
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
    return cells.filter(c => c === null).length === 0;
}


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
            if (IsVictory(G.cells)) {
                return { winner: ctx.currentPlayer };
            }
            if (IsDraw(G.cells)) {
                return { draw: true };
            }
        },
    },


});

const App = Client({
    game: TicTacToe ,
    board: TicTacToeBoard,

    ai: AI({
        enumerate: (G, ctx) => {
            let moves = [];
            for (let i = 0; i < 9; i++) {
                if (G.cells[i] === null) {
                    moves.push({ move: 'clickCell', args: [i] });
                }
            }
            return moves;
        },
    }),
});

export default App;