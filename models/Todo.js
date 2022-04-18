const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is string"],
  },
});
const Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo;
