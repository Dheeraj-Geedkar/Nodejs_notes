
const fs = require("fs") ;
const https = require("https") ; 
                       //   |
                      //   \/
                      //  core modules of nodejs

console.log(" async task ");

var a = 37413854 ;
var b = 23253637 ;

// sync task ( blocks thread )
fs.readFileSync( "./file.txt" , "utf8" ) ; 
console.log(" This will run only after file read ");
// Here since the function is synchronous so the V8 engine will wait till the task is completed but as we know that v8 engine do not have any property of reading the file so the read file functionality will be provided by the libUV but since it is the synchronous function so the V8 will wait till we get the data from the Lib UV


// async task  ( nonblocking thread )
https.get("https://dummyjson.com/products/1", (res) => {
    console.log("fetched data Successfully") ;
}) ;

// async task  ( nonblocking thread ) 
setTimeout( () => {
    console.log("setTimeout Called after 5 seconds") ;
} , 5000 ) ;

// async task   ( nonblocking thread )
fs.readFile("./file.txt" , "utf8" , (err , data) => {
    console.log(" File data : " , data );   
}) ;



// sync task  ( blocks thread )
function multiply( x , y ){
    var r = x * y ;
    return r ;
}

var c = multiply ( a , b ) ;

console.log(" Multiply result = " , c );
