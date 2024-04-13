const mongodb = require('mongodb');

let db = null;

module.exports = async () => {
    if(db !== null) return db;

    const client = await mongodb.MongoClient.connect('mongodb://hanna.gg:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    db = client.db('chat').collection('messages');
    return db;
}
