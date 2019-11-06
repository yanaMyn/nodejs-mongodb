var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;

    var dbo = db.db("mydb");

    //find one
    dbo.collection("customers").findOne({}, (err, result) => {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });

    // find all
    dbo.collection("customers").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

    //find some
    dbo.collection("customers").find({}, {projection: {_id: 0, name: 1, address: 1}})
        .toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });

});