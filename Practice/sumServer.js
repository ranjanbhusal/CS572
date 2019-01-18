const http = require('http');
const { fork } = require('child_process');
const server = http.createServer();
const longOperation = require('./longOperation');

server.on('request', (req, res) => {
    childProcess = fork(longOperation.js);
    childProces.send('start');
    childProcess.on('message', sum => {
        res.end(`sum is ${sum}`);
    });
});

server.listen(3000);