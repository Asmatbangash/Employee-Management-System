import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  textarea: {
    type: String,
    required: true,
  },
});

const department = mongoose.model("department", DepartmentSchema);

export default department;
