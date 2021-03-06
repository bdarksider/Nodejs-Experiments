'use strict';

const http = require('http');
const express = require('express');
const fs = require('fs');

// for sync file read
// const configJson = fs.readFileSync('./config.json');

fs.readFile('./config.json', 'utf-8', function(err, data) {

    const config = JSON.parse(data);

    const app = express();

    app.use(express.static(config.webServer.folder));

    const httpServer = http.createServer(app);

    httpServer.listen(config.webServer.port, function(err) {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(`web server listening on ${config.webServer.port}`);
    });
});

console.log('reading config file');