const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/test";
mongoose
  .connect(url)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
