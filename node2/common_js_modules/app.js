require("./xyz") ;      //  One module into another

const util = require("node:util") ;

/* ===============================================

  const obj = require("./sum") ;    
   
  or 

const {x , calSum } = require("./calculate/sum.js") ;   // Object destructing

 Suppose if we want to create a var X in the app.js . But there will be a confusion between which x should be accessed from which module . So We will create the variable x in app.js and will not import the variable X from another module to avoid confusion

 ex: const { calSum } = require("./sum") ;
      var x = 100 ;

const { calMulti } = require("./calculate/multiply.js") ;

*/

// or 

// Optimized way 

const { calMulti , calSum } = require("./calculate") ;

// Instead of importing private variables methods from multiple file , smultiple times import we can use a simple file in that particular folder to export all the contents and Just import only one line needed

// Import contents from the json file
const data = require("./data.json") ;

console.log(data);


var name = 'hello world' ;
var a = 10 ;
var b = 20 ;


// obj.calSum( a , b) ;
// console.log(obj.x);

// or

calSum( a , b) ;
calMulti(a , b) ;
//  console.log(x);

 console.log(globalThis === global);    