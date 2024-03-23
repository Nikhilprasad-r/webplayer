import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.error(err);
      throw err;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (e) {
    console.error(e);
  }
})();
