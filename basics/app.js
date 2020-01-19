//import core node modules
const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    //set headers to the response
    res.setHeader('Content-type','text/html');
    //write data to the response
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Node js app</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="test" name="message" placeholder="Enter text"/><button type="submit">Submit</button></form></body>');
        res.write('<html/>');  
        return res.end();  // quite the function after returning
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
        
        //send status code
        res.statusCode = 302;
        //send location header for redirection
        res.setHeader('Location', '/');
        return res.end();
        
    }
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