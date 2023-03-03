const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGODB_URI;

const taskManagerSchema = mongoose.Schema({
  title: String,
  content: String,
  status: Boolean,
});

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((result) => console.log("Connected to MongoDB"));

module.exports = mongoose.model("taskManager", taskManagerSchema);
