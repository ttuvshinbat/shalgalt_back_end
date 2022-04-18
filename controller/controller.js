const Todo = require("../models/Todo");
function get_todo(req, res) {
  Todo.find({}, function (err, data) {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: data });
  });
}
function create_todo(req, res) {
  const data = req.body;
  Todo.create(data, function (err, data) {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: data });
  });
}
function delete_todo(req, res) {
  const id = req.params.id;
  console.log(id);
  Todo.deleteOne({ _id: id }, function (err, data) {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: " data deleted" });
  });
}
function update_todo(req, res) {
  const id = req.params.id;
  console.log(id);
  const data = req.body;
  Todo.updateOne({ _id: id }, data, function (err, data) {
    if (err) res.json({ success: false, data: err });
    else res.json({ success: true, data: data });
  });
}

module.exports = {
  get_todo,
  create_todo,
  delete_todo,
  update_todo,
};
