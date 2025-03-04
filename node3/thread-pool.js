const fs = require("fs") ;
const crypto = require("crypto") ;

// To change the number of uv threads  we use

// process.env.UV_THREADPOOL_SIZE = 8 ;

crypto.pbkdf2( "password" , "salt" , 5000000 , 50 , "sha512" , ( err ,key) => {
    console.log(" 1 - cryptopbkdf2 done ");
} ) ;

// fs.readFile("./file.txt" , "utf8" , () => {
//     console.log(" File reading cb " );
// } ) ;

crypto.pbkdf2( "password" , "salt" , 5000000 , 50 , "sha512" , ( err ,key) => {
    console.log(" 2 - cryptopbkdf2 done ");
} ) ;

crypto.pbkdf2( "password" , "salt" , 5000000 , 50 , "sha512" , ( err ,key) => {
    console.log(" 3 - cryptopbkdf2 done ");
} ) ;

crypto.pbkdf2( "password" , "salt" , 5000000 , 50 , "sha512" , ( err ,key) => {
    console.log(" 4 - cryptopbkdf2 done ");
} ) ;

// o/p =>

//     1 - cryptopbkdf2 done
//     2 - cryptopbkdf2 done
//     3 - cryptopbkdf2 done
//     4 - cryptopbkdf2 done

// Here the crypto task is executed at the same time because we know that the Async task are offloaded to LibUV and LibUV has a thread pool which has by default 4 threads so the Crypto async task are assigned to uv threads which are executed at the same time and can have different order of execution but will be executed at same time 

// ==================================

crypto.pbkdf2( "password" , "salt" , 5000000 , 50 , "sha512" , ( err ,key) => {
    console.log(" 5 - cryptopbkdf2 done ");
} ) ;

//     1 - cryptopbkdf2 done
//     2 - cryptopbkdf2 done
//     3 - cryptopbkdf2 done
//     4 - cryptopbkdf2 done
//     5 - cryptopbkdf2 done

// Here the first four crypto async task will be executed at the same time and the left crypto async task will be executed after the first 4 async tasks because as we know that uv threads by default size is 4 so next crypto async task will be executed only when the threads are released by previous async task.
