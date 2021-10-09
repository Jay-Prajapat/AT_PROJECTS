// var http = require('http'); // Import Node.js core module
// fs = require('fs');
// var mongo = require('mongodb');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });



// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });

//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = [
//       { name: 'John', address: 'Highway 71'},
//       { name: 'Peter', address: 'Lowstreet 4'},
//       { name: 'Amy', address: 'Apple st 652'},
//       { name: 'Hannah', address: 'Mountain 21'},
//       { name: 'Michael', address: 'Valley 345'},
//       { name: 'Sandy', address: 'Ocean blvd 2'},
//       { name: 'Betty', address: 'Green Grass 1'},
//       { name: 'Richard', address: 'Sky st 331'}
//     ];
//     dbo.collection("customers").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//       db.close();
//     });
//   });

//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = [
//       { _id: 154, name: 'Chocolate Heaven'},
//       { _id: 155, name: 'Tasty Lemon'},
//       { _id: 156, name: 'Vanilla Dream'}
//     ];
//     dbo.collection("products").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").findOne({}, function(err, result) {
//       if (err) throw err;
//       console.log(result.name);
//       db.close();
//     });
//   });

// fs.readFile('./src/app/accounts/login/login.component.html',function(err,html){
//     if(err){
//         throw err;
//     }

//     var server = http.createServer(function (req, res) {   //create web server
//         if (req.url == '/') { //check the URL of the current request

//             // set response header
//             res.writeHead(200, { 'Content-Type': 'text/html' }); 

//             // set response content    
//             res.write(html);
//             res.end();

//         }
//         else if (req.url == "/login") {

//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(html);
//             res.end();

//         }

//         else
//             res.end('Invalid Request!');

//     });

//     server.listen(5000); //6 - listen for any incoming requests


// })

// var server = http.createServer(function (req, res) {   //create web server
//     if (req.url == '/') { //check the URL of the current request

//         // set response header
//         res.writeHead(200, { 'Content-Type': 'text/html' }); 

//         // set response content    
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();

//     }
//     else if (req.url == "/login") {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>This is student Page.</p></body></html>');
//         res.end();

//     }

//     else
//         res.end('Invalid Request!');

// });

// server.listen(5000); //6 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')

// const MongoClient = require('mongodb').MongoClient;


// const url = 'mongodb://127.0.0.1:27017';

// MongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, (err, client) => {
//     if (err) {
//         return console.log(err);
//     }

//     // Specify database you want to access
//     const db = client.db('BusBooking');

//     console.log(`MongoDB Connected: ${url}`);
// });


var express = require('express');
var app = express();

const port = process.env.PORT || 8000;

// var path = require('path');
// var bodyParser = require('body-parser');
// var mongo = require("mongoose");

// var db = mongo.connect("mongodb://localhost:27017/BusTicketBookingSystem", function(err, response){
//     if(err){console.log(err);}
//     else{console.log('Connected to ' + db, ' + ', response);}
// });

// var app = express()
// app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var cors = require('cors');
// app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-control-Allow-Origin', 'http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,POST');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-control-Allow-Credentials', true);
    next();
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/BusTicketBookingSystem", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', mongoConnected);

function mongoConnected() {
    var busSchema = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        mobilenumber: Number,
    }, { collection: 'users' });
    var Usr = mongoose.model("Usr", busSchema);

    app.get("/user", (req, res) => {
        Usr.find(function (err, bususers) {
            if (err) return res.status(400).json({ error: 'User not found! ' })
            return res.status(200).json(bususers)
        });
    });

    app.post("/user", (req, res) => {
        var usrData = new Usr(req.body);
        usrData.save(function (err) {
            if (err) return res.status(400).json({ error: 'Can not add User ' })
            return res.status(200).json({ message: 'User added sucessfully! ' })
        })
    })
}

// app.use(function(req, res, next){
//     res.setHeader('Access-control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-control-Allow-Methods', 'GET, POST. OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-control-Allow-Credentials', true);
//     next();
// });

// var Schema = mongo.Schema;

// var UsersDetails = new Schema({
//     username: { type: String },
//     email: { type: String },
//     password: { type: String },
//     mobilenumber: { type: Number },
// }, { versionKey: false });

// var model = mongo.model('users', UsersDetails, 'users');

// app.post("/api/SaveUser", function (req, res) {
//     var mod = new model(req.body);
//     if (req.body.mode == "Save") {
//         mod.save(function (err, data) {
//             if (err) {
//                 res.send(err);
//             }
//             else {
//                 res.send({ data: "Record has been inserted..!!" });
//             }
//         });
//     }

//     else{
//         model.findByIdAndUpdate(req.body.id, {name: req.body.name, address: req.body.address},
//             function(err,data){
//                 if(err){
//                     res.send(err);
//                 }
//                 else{
//                     res.send({data:"Record has been Updated..!!"});
//                 }
//             });
//         }
// })


// app.post("/api/deleteUser",function(req,res){
//     model.remove({_id: req.body.id}, function(err){
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.send({data:"Record has been Deleted..!!"});
//         }
//     });
// })

// app.get("/api/getUser",function(req,res){
//     model.find({}, function(err,data){
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.send(data);
//         }
//     });
// })

app.listen(port, function (err) {
    if (err)
        console.log("Error in server setup")
    else
        console.log("Server listening on Port", port);
});

// })