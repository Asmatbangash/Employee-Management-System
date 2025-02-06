import mongoose from "mongoose";
import User from "../db/models/User.js";

main()
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ems");
}

const initDataFunction = async () => {
  const userinitData = new User({
    name: "admin",
    email: "admin@gmail.com",
    password: "admin",
    role: "admin",
  });

  userinitData.save().then((res) => console.log(res));
};

initDataFunction();
