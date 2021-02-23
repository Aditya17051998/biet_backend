const mongoose = require("mongoose");
//////////   use of useCreateIndex ////////////
mongoose.set("useCreateIndex", true);
///////////  use of useNewUrlParser and useUnifiedTopology  //////////
mongoose.connect("mongodb://localhost:27017/biet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to mongodb"));

db.once("open", function () {
  console.log("connected to the database");
});

module.exports = db;
