#!/usr/bin/env node

const action = require('./action'),
    pkg      = require('./package.json'),
    program  = require('commander');

// Create the program
program
    .version(pkg.version)
    .arguments('<twitch-username>')
    .option('-f, --followers', 'The amount of followers the streamer has')
    .option('-g, --game',      'The game the streamer is playing')
    .option('-m, --mature',    'Whether the streamer streams mature content or not')
    .option('-p, --partnered', 'Whether the streamer is partnered or not')
    .option('-s, --started',   'When the streamer went live')
    .option('-t, --title',     'The current stream title')
    .option('-v, --viewers',   'The amount of viewers the streamer currently has watching')
    .action(action)
    .parse(process.argv);