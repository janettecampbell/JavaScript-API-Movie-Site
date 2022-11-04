const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ============== Root route for the app ====================

app.get("/", (req, res) => {
  res.status(200).json("Welcome to my app");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`);
});
