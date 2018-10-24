import React from 'react';
import QnAGame from './components/Game/QnAGame';
import { Client } from 'boardgame.io/react';
import QnABoard from './components/Board/QnABoard';

// const QnAGame = require('./components/Game/QnAGame').QnAGame;

const QnAClient = Client({
    game: QnAGame,
    board: QnABoard,
    // multiplayer: { server: 'localhost:8000' },
});


const App = () => (
    <div>
        <QnAClient />
        {/*<QnAClient playerID = "0" />*/}
        {/*<QnAClient playerID = "1" />*/}
    </div>
);
export default App;