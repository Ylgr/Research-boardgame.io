import React from 'react';
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import QnABoard from './components/Board/QnABoard'
// import { AI } from 'boardgame.io/ai';
//
// // Return true if `answers` is in a winning configuration.
// function IsVictory(answers) {
//     // const positions = [
//     //     [0, 1, 2],
//     //     [3, 4, 5],
//     //     [6, 7, 8],
//     //     [0, 3, 6],
//     //     [1, 4, 7],
//     //     [2, 5, 8],
//     //     [0, 4, 8],
//     //     [2, 4, 6],
//     // ];
//     //
//     // for (let pos of positions) {
//     //     const symbol = answers[pos[0]];
//     //     let winner = symbol;
//     //     for (let i of pos) {
//     //         if (answers[i] !== symbol) {
//     //             winner = null;
//     //             break;
//     //         }
//     //     }
//     //     if (winner != null) return true;
//     // }
//
//     return false;
// }
//
// // Return true if all `answers` are occupied.
// function IsDraw(answers) {
//     // return answers.filter(c => c === null).length === 0;
//     return false;
// }
//
//
// const TicTacToe = Game({
//     setup: () => ({ answers: Array(2) }),
//     // setup: () => ({ answers: Array(9).fill(null) }),
//
//     moves: {
//         clickAnswer(G, ctx, id) {
//             let answers = [...G.answers]; // don't mutate original state.
//             answers[id] = ctx.currentPlayer;
//             return { ...G, answers }; // don't mutate original state.
//         },
//     },
//
//     flow: {
//         movesPerTurn: 1,
//         endGameIf: (G, ctx) => {
//             if (IsVictory(G.answers)) {
//                 return { winner: ctx.currentPlayer };
//             }
//             if (IsDraw(G.answers)) {
//                 return { draw: true };
//             }
//         },
//     },
//
//
// });
//
// const TicTacToeClient = Client({
//     game: TicTacToe,
//     board: QnABoard,
//     multiplayer: { local: true },
// });
//
// const App = () => (
//     <div>
//         <TicTacToeClient playerID="0"/>
//         <TicTacToeClient playerID="1"/>
//     </div>
// );
//
//



const QnA = Game({
    name: 'QnA',
    // moves: {
    //     answer(bool) {
    //
    //     }
    // },
    flow: {
        movesPerTurn: 1,
        endTurnIf : (bool, ctx) => {
            console.log('End Turn');
            console.log(`Turn: {ctx}!`);
            if(bool) return 'True';
            else return 'False';
        },
    },
});

const QnAClient = Client({
    game: QnA,
    board: QnABoard
});

const App = () => (
    <div>
        <QnAClient/>
        {/*<QnAClient playerID = "0" />*/}
        {/*<QnAClient playerID = "1" />*/}
    </div>
);
export default App;