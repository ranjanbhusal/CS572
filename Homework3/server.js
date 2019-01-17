const fs = require ('fs');
const http = require ('http');
const path = require('path');

server = http.createServer();

server.on('request', function (req, res)  {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write("Server responding");
    res.end();
});

server.listen(8000);


server.on('request', function(req, res) {
    res.writeHead(200, {'Content_Type' : 'video/mp3'});
    res.write('video streaming');
    res.end();
    
    var filePath = path.join(__dirname, 'test.mp4');
    var reqFile = fs.readFile(filePath, 'utf-8', function(err, data) {
        if(err) console.error("Error occured");
        else {
            res.write(data);
            res.end();
        }           
    });
});

server.listen(4000);


server.on("request", function(request, response) {
    var filePath = path.join(__dirname, "test.mp4");
    response.writeHead(200, {
        "Content-Type": "video/mp4"
    });
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
});
server.listen(6000);