const request = require('superagent');

async function twitchApi(path, query, value) {
    // Store the URL and request headers...
    const url = `https://api.twitch.tv/helix/${ typeof path === 'object' ? path.join('/') : path }?${ query }=${ value }`,
        header = {
            clientId: [ 'Client-ID', '3zzmx0l2ph50anf78iefr6su9d8byj8' ],
            accept:   [ 'Accept',    'application/json' ]
        };
    // ... make the request,...
    const response = await request.get(url).set(...header.clientId).set(...header.accept);
    // ... and return the data
    return JSON.parse(response.text).data;
}

module.exports = twitchApi;