const twitchApi = require('../modules/twitchApi'),
    label       = 'Game',
    output      = require('../modules/output');

async function getGame(id) {
    const data = await twitchApi('games', 'id', id),
        style  = !data.length ? 'red' : 'blue',
        label  = 'Game',
        text   = !data.length ? 'No game data found!' : data[0].name;
    return { style, label, text };
}

module.exports = getGame;