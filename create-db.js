var conn = require('./connection');

conn.MongoClient.connect(conn.Url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});