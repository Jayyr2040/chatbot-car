// 1. Import dependencies
const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");

// 1.1 Allow parsing on request bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));
// 2. Import routes for api
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
  });
const watsonRoutes = require("./routes/api/watson");
// 2.1 Direct requests to /api/watson to Watson Routes
app.use("/api/watson", watsonRoutes);

// 3. Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening on port ", port);
});