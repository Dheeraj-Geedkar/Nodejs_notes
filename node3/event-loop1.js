const fs = require("fs") ;
const a = 100 ;

setImmediate( () =>
    console.log("setimmediate ") ) ;

fs.readFile("./file.txt" , "utf8" , () => {
    console.log(" File reading cb " );   
}) ;

setTimeout( () => {
    console.log(" Timer expired ") ;
} , 0 ) ;

function printA( ){
    console.log(" a = " , a );
}

printA() ;

console.log(" Last line of the file " );


// o/p =>

//     a = 100
//     Last line of the file
//     Timer expired
//     setimmediate
//     File reading cb

// The file read task will be executed in the next cycle . Because finally read operation takes time then any other async task