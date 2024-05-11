const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const userRouter = require("./routers/user");

const port = process.env.PORT || 8000;

// require("./db/mongoose");

// Connect to db
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
