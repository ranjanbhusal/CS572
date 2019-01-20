const http = require ('http');
const {fork} = require('child_process');
const url = require ('url');

const server = http.createServer();

server.on("request", (req, res) => {
    // if (req.url === '/favicon.ico') { res.end(); return;}  
    const myUrl = url.parse(req.url, true);
    const filePath = myUrl.query.url;
    if(filePath === undefined) {return;}
    console.log(filePath+"-------");
 
    const childProcess = fork("fileReader.js");
    childProcess.send(filePath);
    childProcess.on('message', function(data) {
        if (data === 'Done') res.end();
        else res.write(data);
    });
});

server.listen(6066, ()=>{console.log("server running")});

// http://localhost:4000/?path/to/my/file.txt