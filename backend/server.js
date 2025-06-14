import express from "express";
import products from "./data/products.js";

import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB(); // connect to MongoDB

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
