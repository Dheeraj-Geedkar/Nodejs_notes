const fs = require("fs") ;
const a = 100 ;

setImmediate( () =>
    console.log("setimmediate ") ) ;

Promise.resolve(" Promise ").then(console.log) ;

fs.readFile("./file.txt" , "utf8" , () => {
    console.log(" File reading cb " );   
}) ;

setTimeout( () => console.log(" Timer expired ") , 0 ) ;

process.nextTick( () => console.log(" process.nextTick ") ) ;

function printA( ){
    console.log(" a = " , a );
}

printA() ;

console.log(" Last line of the file " );


// o/p =>

//     a = 100
//     Last line of the file
//     process.nextTick 
//     Promise
//     Timer expired
//     setimmediate
//     File reading cb

// The file read task will be executed in the next cycle . Because finally read operation takes time then any other async task