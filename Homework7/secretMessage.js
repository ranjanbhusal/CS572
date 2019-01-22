const express = require('express');
const mongoClient = require('mongodb').MongoClient
const client = new mongoClient('mongodb://localhost:27017');
const crypto = require('crypto');
const app = express();

const algorithm = 'aes256';
const password = 'asaadsaad';
let db;
let collection;

client.connect(err => {
    db = client.db('secret')
    collection = db.collection('reveal')
    collection.save({_id:'5c46d0952e542183d8c3b275', message: 'ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03'})
});

app.get('/secret', (req, res) => { 
    collection.findOne({},(err, doc) => {
    let decipher = crypto.createDecipher(algorithm, password);
    let decrypted = decipher.update(doc.message, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8')
    res.json([{data: decrypted, success: true}])
    });
});

app.listen(3232, ()=> console.log('listening on 3232'));

