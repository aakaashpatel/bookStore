import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
const Uri = process.env.MongoDBURI;

// connect to mongoDB
try {
  mongoose.connect(Uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected");
} catch (error) {
  console.log("Error", error);
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
