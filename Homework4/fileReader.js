const fs = require ('fs');
const {promisify} = require('util')

function sendParent(fileLocation) {
    let readStream = fs.createReadStream(fileLocation);

    readStream.on('data', chunk => {
        process.send(chunk.toString());
    });

    readStream.on('end', chunk => {
        process.send('Done');
    });
}

process.on('message', sendParent);


