const twitchApi = require('../modules/twitchApi');

async function getFollowers(id) {
    const total = await twitchApi([ 'users', 'follows' ], 'to_id', id, 'total'),
        style   = !total ? 'red' : 'blue',
        label   = 'Followers',
        text    = !total ? 'No follower data found!' : total;
    return { style, label, text }
}

module.exports = getFollowers;