//import core node modules
const http = require('http');

//import local modules
const routes = require('./routes');
// create server
const server = http.createServer(routes);

//listen to the port
server.listen(3002);