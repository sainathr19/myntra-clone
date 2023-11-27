const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const uri =
  "mongodb+srv://sainath:sainath@cluster0.mez8kyv.mongodb.net/?retryWrites=true&w=majority";
var client = new MongoClient(uri);
const database = client.db("myntra");
const productsdata = database.collection("productsdata");
app.listen(5000, () => {
  console.log(`Listening port`);
});

app.get("/men", async (req, res) => {
  let arr = [];
  r = await productsdata.find({ category: "Men" });
  for await (const doc of r) {
    arr.push(doc);
  }
  res.json(arr);
});
app.get("/women", async (req, res) => {
  let arr = [];
  r = await productsdata.find({ category: "Women" });
  for await (const doc of r) {
    arr.push(doc);
  }
  res.json(arr);
});
app.get("/kids", async (req, res) => {
  let arr = [];
  r = await productsdata.find({ category: "Kids" });
  for await (const doc of r) {
    arr.push(doc);
  }
  res.json(arr);
});
