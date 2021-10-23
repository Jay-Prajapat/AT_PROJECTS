var express = require("express");
var app = express();

const port = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var cors = require('cors');
app.use(cors());



var mongoose = require("mongoose");
const { interval } = require("rxjs");
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

    var busdetailsSchema = new mongoose.Schema({
        source:String,
        destination:String,
        arrivaltime:String,
        departuretime:String,
        price:Number,
        type:String,
    }, {collection: 'busdetail'});
    var Bus = mongoose.model("Bus",busdetailsSchema);
    
    
    var bookingDetailSchema = new mongoose.Schema({
        name:String,
        age:Number,
        total_price:Number,
    }, {collection: 'bookingdetail'});
    var Details = mongoose.model("Details",bookingDetailSchema);

    var userDetailSchema = new mongoose.Schema({
        email:String,
        mo_number:Number,
    }, {collection: 'userdetail'});
    var UserDetail = mongoose.model("UserDetail",userDetailSchema);



    app.get("/usr", (req, res) => {
        Usr.find(function (err, bususers) {
            if (err) return res.status(400).json({ error: 'User not found! ' })
            return res.status(200).json(bususers)
        });
    });

    app.post("/usr", (req, res) => {
        var usrData = new Usr(req.body);
        usrData.save(function (err) {
            if (err) return res.status(400).json({ error: 'Can not add User ' })
            return res.status(200).json({ message: 'User added sucessfully! ' })
        });
    });

    app.get("/busdetail",(req,res)=>{
        Bus.find(function(err,details){
            if(err) return res.status(400).json({error: 'Bus not found!' })
            return res.status(200).json(details)
        });
    });

    app.get("/bookingdetail",(req,res)=>{
        Details.find(function(err,bookingdetail){
            if(err) return res.status(400).json({error: 'Can not get Booking Details! '})
            return res.status(200).json(bookingdetail)
        });
    });

    app.post("/bookingdetail", (req, res) => {
        var bookingData = new Details(req.body);
        bookingData.save(function (err) {
            if (err) return res.status(400).json({ error: 'Can not add Booking Details! ' })
            return res.status(200).json({ message: 'Booking Details added sucessfully! ' })
        });
    });

    app.post("/userdetail", (req, res) => {
        var userData = new UserDetail(req.body);
        userData.save(function (err) {
            if (err) return res.status(400).json({ error: 'Can not add User Details! ' })
            return res.status(200).json({ message: 'User Details added sucessfully! ' })
        });
    });
    
}



app.listen(port, function (err) {
    if (err)
        console.log("Error in server setup")
    else
        console.log("Server listening on Port", port);
});

