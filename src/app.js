const express = require("express");
const cors = require("cors");

const app = express();

// ==> Routes for API:
const userRoute = require("./routes/user.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use("/api/", userRoute);

module.exports = app;
