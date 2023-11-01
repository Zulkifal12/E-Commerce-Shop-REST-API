const express = require("express");
const productsRoutes = require("./API/routes/products");
const orderRoutes = require("./API/routes/orders");
const userRoutes = require("./API/routes/user");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

//Database Connection
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://mzulkifal:Mz%40102648@shop-rest-api.unx8lsb.mongodb.net/?retryWrites=true&w=majority"
);

//Npm morgan handle the logs for incoming requests
app.use(morgan("dev"));

//body parser handles the the body of the incoming requests
//extended false means that the body parser will only accept simple bodies for url encoded data
//extended true means that the body parser will accept all types of bodies

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes which handel incoming requests
app.use("/products", productsRoutes);
app.use("/order", orderRoutes);
app.use("/user", userRoutes);
//Publish Upload Folder publically
app.use("/uploads", express.static("uploads"));
//Error Handling
app.use((req, res, next) => {
  const error = new Error("Not Found Issue");
  error.status = 404;
  next(error);
});

app.use((req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
