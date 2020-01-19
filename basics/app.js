//import core node modules
const http = require('http');

// create server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    //set headers to the response
    res.setHeader('Content-type','text/html');
    //write data to the response
    res.write('<html>');
    res.write('<head><title>Node js app</title></head>');
    res.write('<body>Node js app</body>');
    res.write('<html/>');
    
    //end the response

    res.end();
    //can not send response to client after ending it
});

//listen to the port
server.listen(3002);