const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();
const PORT = 5000;
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://tural:ozil11@cluster0.u3vqv.mongodb.net/JWT?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      },
      () => {
        console.log("DB CONNECT");
      }
    );
    app.listen(PORT, () => {
      console.log(`Server has been started Port = ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
start();
