import connectDB from "./db/index.js";
import { app } from "./app.js";
connectDB()
  .then(() => {
    app.get("/api/v1/id", (req, res) => {
      res.json("Hello World");
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running");
    });
  })
  .catch((error) => {
    console.error(error);
  });
