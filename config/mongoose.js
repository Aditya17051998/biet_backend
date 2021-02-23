const mongoose = require("mongoose");
//////////   use of useCreateIndex ////////////
mongoose.set("useCreateIndex", true);
///////////  use of useNewUrlParser and useUnifiedTopology  //////////
///////// mongodb://localhost:27017/biet
mongoose.connect("mongodb+srv://anshita:pipdIq5fqHCYrgO7@cluster0.adtj0.mongodb.net/codeial_production?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to mongodb"));

db.once("open", function () {
  console.log("connected to the database");
});

module.exports = db;
