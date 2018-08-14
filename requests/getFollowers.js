const twitchApi = require('../modules/twitchApi');

async function getFollowers(id) {
    const data = await twitchApi([ 'users', 'follows' ], 'to_id', id),
        style  = !data.length ? 'red' : 'blue',
        label  = 'Followers',
        text   = !data.length ? 'No follower data found!' : data.length;
    return { style, label, text }
}

module.exports = getFollowers;