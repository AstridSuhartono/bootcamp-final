const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3001;

//define models
require('./models/user')
require('./models/post')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//define routes
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
//app.use(require('./routes/user'))


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:M4rchsalsa@ds245240.mlab.com:45240/heroku_z8f1sw09",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎  ==> API server now on PORT ${PORT} !`);
});
