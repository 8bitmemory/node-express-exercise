
var express = require('express');
var app = express();

app.get("/",(req,res)=> {
    let absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});
  

// --> 7)  Mount the Logger middleware here
app.use(function middleware(req, res, next) {
    var string = req.method + ' ' + req.path + ' - ' + req.ip;
    console.log(string);
    next();
});

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */
app.get("/",(req,res)=> {
    let absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

/** 4) Serve static assets  */
app.use(express.static(__dirname + '/public'));

/** 5) serve JSON on a specific route */
app.get('/json',(req,res) => {
  
    if(process.env.MESSAGE_STYLE === "uppercase"){
      var response = "Hello json".toUpperCase();
    }else{
      var response = "Hello json";
    }
    res.json({ "message" : response });
});

/** 6) Use the .env file to configure the app */
require('dotenv').config({ path: __dirname+"/.env" })

 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
app.get("/now",(req,res,next)=> {
    req.time = new Date().toString();  
    next();
  }, (req,res)=> {
    res.send({ 'time' : req.time });
});

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo',(req,res) => {
    let word = req.params.word;
    res.send({ echo : word });
  });

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.route("/name").get((req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    var firstLastName = firstName + " " + lastName;
    res.send({ 'name' : firstLastName });
});
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.post('/name',(req, res) => {
    var firstName = req.body.first;
    var lastName = req.body.last;
    var firstLastName = firstName + " " + lastName;
    res.send({ 'name' : firstLastName });
});

/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
