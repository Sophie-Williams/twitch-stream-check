const twitchApi = require('../modules/twitchApi');

function partneredStatus(broadcasterType) {
    const partnered = broadcasterType === 'partner',
        conditional = partnered ? 'is' : 'is not',
        suffix      = partnered || !broadcasterType ? '' : ` (${ broadcasterType })`;
    return `This streamer ${ conditional } partnered` + suffix;
}

async function getPartnered(id) {
    const data = await twitchApi('users', 'id', id),
        style  = !data.length ? 'red' : 'blue',
        label  = 'Partnered?',
        text   = !data.length ? 'No partnered data found!' : partneredStatus(data[0].broadcaster_type);
    return { style, label, text };
}

module.exports = getPartnered;