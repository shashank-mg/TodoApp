const mongoose = require("mongoose");
const Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    task_details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todos = mongoose.model("Todo", Schema);
module.exports = Todos;
