var conn = require("./connection");

conn.MongoClient.connect(conn.Url, { useUnifiedTopology: true}, (err, db) => {
   if (err) throw err;

   var dbo = db.db("mydb");
   var query = {address: "Sideway 1633"};

   dbo.collection("customers").find(query).toArray((err, result) => {
       if (err) throw err;
       console.log(result);
       db.close();
   });

});