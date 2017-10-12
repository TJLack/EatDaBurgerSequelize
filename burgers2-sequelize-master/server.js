var express = require("express");

//require models folder 
var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

var methodOverride = require("method-override");

var bodyParser = require("body-parser");

app.use(express.static(__dirname + "./public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// **** db.sequelize **** [sequelize property on db object 
// is actually our connection to our database]
// **** .sync ** is a method of sequelize, 
// that creates tables using the models we describe 
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});

console.log(module.exports);