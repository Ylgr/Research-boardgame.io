const Server = require('boardgame.io/server').Server;
const QnAGame = require('./components/Game/QnAGame').QnAGame;
const server = Server({ games: [QnAGame] });
server.run(8000);