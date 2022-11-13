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

app.listen(PORT, () => {
    console.log("Backend is running on port:", PORT);
});
