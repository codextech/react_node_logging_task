const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

// Express APP Object , singleton in nature
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* register our routes */
app.use(routes);

// start our server...
var server = app.listen(process.env.PORT || 4000, () => {
  console.log("Server Started and Listening on port " + server.address().port);
});
