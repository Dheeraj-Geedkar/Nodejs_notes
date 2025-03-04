const http = require("http") ;

//or

// const http = require("node:http") ;
// since hhtp is a core module of nodeJS

const server = http.createServer( function (req , res) {

    if(req.url === '/getSecretData' ){
        res.end(" there is no secret data") ;
    }

    // Give replied Hello World to each and every client who accessed the server
    res.end("Hello World");
    // Close the connection and give reply to the user

}) ;
// http.createServer() Returns an instance of a server . It is able to listen the request.
// To handle the request of the user we can use a function inside the createserver
// Function takes two parameter ( request , respond )
// both input parameters are objects and they have multiple properties

server.listen(7777) ;
// Input parameter is the port number
// Now our server can listen the request