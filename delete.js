var conn = require("./connection");

conn.MongoClient.connect(conn.Url, {useUnifiedTopology: true}, (err, db) => {
   if (err) throw err;

    var dbo = db.db("mydb");
    var myquery = { address: 'Mountain 21' };

    dbo.collection("customers").deleteOne(myquery, (err, result) => {
        if (err) throw err;

        console.log("1 document deleted");
        db.close();
    });

});