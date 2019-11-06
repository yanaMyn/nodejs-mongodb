var conn = require("./connection");

conn.MongoClient.connect(conn.Url, {useUnifiedTopology: true}, (err, db) => {
   if (err) throw err;

   var dbo = db.db("mydb");

    // { name: 1 } // ascending
    // { name: -1 } // descending
   var mySort = {name: 1};
   dbo.collection("customers").find().sort(mySort).toArray((err, result) => {
       if (err) throw err;
       console.log(result);
       db.close();
   });

});