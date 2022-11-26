require("dotenv").config();
const path = require("path");
const express = require("express");
const { connectDb } = require("./db/connectDb");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
const cors = require("cors");
const PORT = 8001;

console.log(process.env.MONGODB_URI);
console.log(process.env.NODE_ENV);

app.use(express.json());
app.use(cors());
connectDb();

app.use("/api/blog/", blogRoutes);

// if (process.env.NODE_ENV === "production") {
console.log("test");
//*Set static folder up in production
// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
);
// }

app.listen(PORT, () => {
    console.log("Backend is running on port:", PORT);
});
