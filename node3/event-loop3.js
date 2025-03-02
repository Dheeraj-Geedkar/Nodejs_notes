const fs = require("fs") ;

setImmediate( () => console.log("setimmediate ") ) ;

setTimeout( () => console.log(" Timer expired ")  , 0 ) ;

Promise.resolve(" Promise ").then(console.log) ;

fs.readFile("./file.txt" , "utf8" , () => {
    setTimeout( () => console.log(" 2nd Timer ")  , 0 ) ;

    process.nextTick( () => console.log(" 2nd nextTick ") ) ; 

    setImmediate( () => console.log(" 2nd setimmediate ") ) ;

    console.log(" File reading cb " );
} ) ;

process.nextTick( () => console.log(" nextTick ") ) ;

console.log(" Last line of the file " );


// o/p =>

//     Last line of the file
//     nextTick 
//     Promise
//     Timer expired
//     setimmediate
//     File reading cb
//     2nd nextTick
//     2nd setimmediate
//     2nd Timer

// The file read task will be executed in the next cycle . Because finally read operation takes time then any other async task

// The file read operation will be executed at last

// Now after printing the console log Since the callback queue and call stack is empty so the event loop will reside on the poll phase

// Now it will again check all the callback queues and will execute starting from the poll phase

// Therefore first check -> close -> timer phase will be executed