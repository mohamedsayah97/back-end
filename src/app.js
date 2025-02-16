import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import router from "./routes/index.js";

const app = express();
app.use(express.json());

app.get("/healthcheck", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", router);


export default app;

//home work CATEGORY CRUD
// modify the User model and add the password field
