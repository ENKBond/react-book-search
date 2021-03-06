const express = require("express");
// const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
// const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.use(routes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
