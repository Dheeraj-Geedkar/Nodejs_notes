const fs = require("fs") ;

setImmediate( () => console.log("setimmediate ") ) ;

setTimeout( () => console.log(" Timer expired ")  , 0 ) ;

Promise.resolve(" Promise ").then(console.log) ;

fs.readFile("./file.txt" , "utf8" , () => {
    console.log(" File reading cb " );
} ) ;

process.nextTick( () => {
    process.nextTick( () => console.log(" inner nextTick ") ) ;
    console.log(" nextTick ") 
});

console.log(" Last line of the file " );


// o/p =>

//     Last line of the file
//     nextTick
//     inner nextTick 
//     Promise
//     Timer expired
//     setimmediate
//     File reading cb

// The file read task will be executed in the next cycle . Because finally read operation takes time then any other async task

// Like in the above code next tick has a nested code So all the code will be executed at the same time in the same queue , then event loop will move to the next phase .

// event loop executes all the tasks in the same queue then it will move to the next phase