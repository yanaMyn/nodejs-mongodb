var conn = require('./connection');

conn.MongoClient.connect(conn.Url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers1", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});