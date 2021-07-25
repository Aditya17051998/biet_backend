const mongoose = require("mongoose");
//////////   use of useCreateIndex ////////////
mongoose.set("useCreateIndex", true);
///////////  use of useNewUrlParser and useUnifiedTopology  //////////
///////// mongodb://localhost:27017/biet
mongoose.connect("mongodb+srv://Aditya:8Epj8lJJdFbuopTy@cluster0.8wxf0.mongodb.net/biet_backend?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to mongodb"));

db.once("open", function () {
  console.log("connected to the database");
});

module.exports = db;
