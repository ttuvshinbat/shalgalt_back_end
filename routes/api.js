const express = require("express");
const app = express();
const Todo = require("../models/Todo");
const router = express.Router();
const Controller = require("../controller/controller");

router.get("/", Controller.get_todo);
router.post("/create", Controller.create_todo);
router.delete("/delete/:id", Controller.delete_todo);
router.put("/update/:id", Controller.update_todo);
module.exports = router;
