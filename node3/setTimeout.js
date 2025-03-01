console.log(" Hello World ");

var a = 37413854 ;
var b = 23253637 ;

// setTimeout( () => {
//     console.log("Call me as soon as possible") ;
// } , 5000 ) ;

// Important question for interviews of 0 second
setTimeout( () => {
    console.log("Call me as soon as possible") ;
} , 0 ) ; // It will only be called once call stck of main thread is empty

// Although having 0 second time but since the set timeout is a async function and the callback function of the set timeout will be called only when the call stack of the V8 will be empty . ie Whole code gets executed ( GEC Removed from call stack ) then only it will push the callback function of async function in call stack for its execution by v8 engine .

function multiply( x , y ){
    var r = x * y ;
    return r ;
}

var c = multiply ( a , b ) ;

console.log(" Multiply result = " , c );