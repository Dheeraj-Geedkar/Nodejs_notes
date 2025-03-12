const express = require("express") ;
// Importing express package from NPM node modules 

// Create new application of Express
const app = express() ;
// Call express function
// Instance of express application

// Handle the request ( Request handler )
app.use( "/test" , (req , res) =>{
    res.send(" Hello from server") ;
    // Response from server
}) ;
// So are server will respond only when we will have /test on the port number in chrome like ( localhost:7777/test ) . if we Will try any other url then we will get ( cannot get / )

app.use( "/hello" , (req , res) =>{
    res.send(" Hello Hello  Hello Hello Hello ") ;
    // Response from server
}) ;

app.use( "/" , (req , res) =>{
    res.send(" Welcome to dashboard ") ;
    // Response from server
}) ;

app.listen( 7777 , () => {
    console.log("Server is successfully listening on port 7777 .... ");
    
}) ;
// Callback function is only Executed called When server is running Successfully ( Listening)
// Server is listening on port 3000 