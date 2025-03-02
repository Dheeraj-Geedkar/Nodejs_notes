const crypto = require("crypto") ;
                      //   |
                      //   \/
                      //  core modules of nodejs
// or 

// const crypto = require("node:crypto") ;

console.log(" blocking task ");

var a = 37413854 ;
var b = 23253637 ;

crypto.pbkdf2Sync( "password" , "salt" , 50000000 , 50 , "sha512" ) ;
console.log(" Key 1  is generated");

// Managed by libuv ( )
// Password based key derivative function  => Generates key
crypto.pbkdf2( "password" , "salt" , 500000 , 50 , "sha512" , ( err ,key) => {
    console.log(" Key 2 is generated");
} )

// async function 
// .pbkdf2 ( String password , Some more content , Total number of processing iterations , key length , Crypto algorithm , Callback function)


function multiply( x , y ){
    var r = x * y ;
    return r ;
}

var c = multiply ( a , b ) ;

console.log(" Multiply result = " , c );

// o/p =>

//     Blocking task
//     Key 1 is generated
//     Multiply result = 244654517894974
//     Key 2 is generated
