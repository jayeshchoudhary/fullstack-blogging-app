require("dotenv").config();
const path = require("path");
const express = require("express");
const { connectDb } = require("./db/connectDb");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
const cors = require("cors");
const PORT = 8001;

app.use(express.json());
app.use(cors());
connectDb();

app.use("/api/blog/", blogRoutes);

// Set static folder up in production
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
);

app.listen(PORT, () => {
    console.log("Backend is running on port:", PORT);
});
