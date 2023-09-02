import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`App is Listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database error", error);
  });
