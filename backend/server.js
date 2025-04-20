// backend/index.js
const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = 8090;

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("College Management System API is running.");
});

// Error handler middleware should be used after all routes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
