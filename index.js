const express = require("express");
const port = process.env.PORT || 7000;
const app = express();
const db = require("./config/mongoose");
const cors = require("cors");     ///////////use of it
const passportJWT = require("./config/passport-jwt-strategy");
app.use(cors());
app.use(express.urlencoded({ extended: false }));      ///////////use of it
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/", require("./routes"));
app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server:${err}`);
  }
  console.log(`server is running on the port:${port}`);
});
