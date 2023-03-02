const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes/routes");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/api/v1/data", route);
app.use(express.static(path.join(__dirname, "build")));

const PORT = 5000;
app.listen(PORT, () => console.log("listening to port 5000"));
