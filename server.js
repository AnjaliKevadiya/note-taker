// include express dependencies
var express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// tell node to create server
var app = express();

// create a port
var PORT = process.env.PORT || 8080;

// sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public/assets'));

// routers
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});