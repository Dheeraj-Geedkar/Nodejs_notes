console.log("Print sum");


const calSum = function( a , b) {

    console.log( a + b );
    
}

var x = 10 ;

// module.exports  = {
//     x : x,
//     calSum : calSum 
// } ;

// or 

module.exports = { x , calSum } ;

// or 

// module.exports.x = x ;
// module.exports.calSum = calSum ;