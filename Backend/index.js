// const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("dotenv").config();

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

app.get("/get-products", async (req, res) => {
  let arr = [];
  r = await productsdata.find({ category: req.query.cat });
  for await (const doc of r) {
    arr.push(doc);
  }
  res.json(arr);
});
app.get("/get-similar", async (req, res) => {
  let arr = [];
  x = await productsdata.findOne({ productid: req.query.id });
  r = await productsdata.find({ category: x.category });
  for await (const doc of r) {
    arr.push(doc);
  }
  res.json(arr);
});

// app.get("/men", async (req, res) => {
//   let arr = [];
//   r = await productsdata.find({ category: "Men" });
//   for await (const doc of r) {
//     arr.push(doc);
//   }
//   res.json(arr);
// });
// app.get("/women", async (req, res) => {
//   let arr = [];
//   r = await productsdata.find({ category: "Women" });
//   for await (const doc of r) {
//     arr.push(doc);
//   }
//   res.json(arr);
// });
// app.get("/kids", async (req, res) => {
//   let arr = [];
//   r = await productsdata.find({ category: "Kids" });
//   for await (const doc of r) {
//     arr.push(doc);
//   }
//   res.json(arr);
// });
app.post("/addtobag", async (req, res) => {
  const c = await bagdata.countDocuments({ username: req.body.username });
  if (c > 0) {
    await bagdata.replaceOne({ username: req.body.username }, req.body);
  } else {
    await bagdata.insertOne(req.body);
  }
});

app.put("/getproductdata", async (req, res) => {
  r = await productsdata.findOne({ productid: req.body.productid });
  res.json(r);
});

app.put("/getproductimages", async (req, res) => {
  r = await productimages.findOne({ productid: req.body.productid });
  res.json(r);
});

app.get("/getbag", async (req, res) => {
  r = await bagdata.findOne(
    { username: req.query.username },
    { projection: { _id: 0 } }
  );
  res.json(r);
});
app.get("/getoneproduct", async (req, res) => {
  r = await productsdata.findOne(
    { productid: req.query.productid },
    { projection: { _id: 0 } }
  );
  res.json(r);
});
app.get("/testapi", async (req, res) => {
  // console.log(req.params);
  console.log(req.query.cat);
  res.json("okk");
});

app.post("/login", async (req, res) => {
  console.log(req.body);
});
