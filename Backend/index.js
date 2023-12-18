// const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const uri =
  "mongodb+srv://sainath:sainath@cluster0.mez8kyv.mongodb.net/?retryWrites=true&w=majority";
var client = new MongoClient(uri);
const database = client.db("myntra");
const productsdata = database.collection("productsdata");
const bagdata = database.collection("bagdata");
const productimages = database.collection("singleproductimages");
app.listen(5000, () => {
  console.log(`Backend Running....`);
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
app.post("/addtobag", async (req, res) => {
  console.log(req.body);
  const result = await bagdata.insertOne(req.body);
  res.json(result);
});

app.put("/getproductdata", async (req, res) => {
  r = await productsdata.findOne({ productid: req.body.productid });
  res.json(r);
});

app.put("/getproductimages", async (req, res) => {
  r = await productimages.findOne({ productid: req.body.productid });
  res.json(r);
});