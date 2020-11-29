//include express dependencies
var express = require("express");

//tell node to create server
var app = express();

//sets an initial port
var PORT = process.env.PORT || 8080;

app.use(express.static('public/assets'));

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//routers
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});