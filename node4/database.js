const {MongoClient} = require("mongodb") ;
// Read Mongo NPM article documentation

const url = "mongodb+srv://nodedev1:MPAp0KlNGS8lul7H@nodep1.qhda5.mongodb.net/" ;
// Paste the connection string in above code

const client = new MongoClient(url) ;

const dbName = 'database1' ;

async function main() {

    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('User1');

    // Insert a document
    const data = {   
         firstname : "david" ,
         lastname : "warner" ,
         city : "melboune" ,
         phoneNumber : "2631674374",
    } ;

    const insertResult = await collection.insertMany([ data ]);
    console.log('Inserted documents =>', insertResult);
  
   // Read all documents
   const findResult = await collection.find({}).toArray();
   console.log('Found documents =>', findResult);

      // task to be done from mongodb documentaion 
   // update , remove , find a document , collection in documentation ,
   
   // Count to total number of documents in a collection
   const countResult = await collection.countDocuments({}) ;
   console.log( " Count of documents in user1 collection => " , countResult );
   
   // Find all documents with a filtre of first name David

  //  const result = await collection.find({}) ;
   // Gives all document

   // or 

    const result = await collection.find({firstname : "david" }).toArray ;
   // apply filter 
   // find() Returns a cursor . Therefore do find().toArray() To get a easy output understandable JSON  array 
    console.log("result => " ,result );
    


    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
// promise 





// Notes

// Go to Mongodb website
// Create a free cluster
// Create a database user
// Get the connection string
// instal Mongodb compass