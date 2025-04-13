import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import login from "./routes/auth.router.js";
import dotenv from 'dotenv'

dotenv.config({path: './.env'})

const app = express();
let port = process.env.PORT || 9090;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main()
  .then(() => console.log("database Connected!"))
  .catch((err) => console.log("database connection failed", err));

async function main() {
  mongoose.connect(process.env.DB_URL);
}

app.use("/api/auth", login);

app.get("/", (req, res) => {
  res.send("server is working");
});

app.listen(port, () => {
  console.log(`your server is ready on ${port}`);
});
