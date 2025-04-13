import mongoose from "mongoose";
import User from "../db/models/User.js";
import dotenv from 'dotenv'

dotenv.config({
  path: '../.env'
})

main()
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

const initDataFunction = async () => {
  const userinitData = new User({
    name: "kashi",
    email: "employee@gmail.com",
    password: "employee",
    role: "employee",
  });

  userinitData.save().then((res) => console.log(res));
};

initDataFunction();
