const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const client = new MongoClient('mongodb://localhost:27017');

let db;
let collection;

app.use(bodyParser.json());

client.connect(err => {
    db = client.db('gmap');
    collection = db.collection('gCollection');
});

const seedLocations = [
    {"name" : "Pizza Hut", "category" : "Restaurant", "location" : [ -91.98914, 41.00686 ] },
    {"name" : "Walmart Supercenter", "category" : "Supercenter", "location" : [ -91.99326780000001, 41.00768800000001 ] },
    {"name" : "Hy-Vee", "category" : "Supermarket", "location" : [ -91.9785195, 41.00467999999999 ] },
    {"name" : "Subway ", "category" : "Restaurants", "location" : [ -91.97267169999998, 41.0067101 ] },
    {"name" : "The Depot Brewery", "category" : "Night Club", "location" : [ -91.9680032, 41.01098500000001 ] }
];


app.get('/', (req, res) => {
    res.json(seedLocations);
});

app.listen(3434, ()=> console.log('listening to 3434'));