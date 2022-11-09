const router = require("express").Router();

const { getTodos, getTodo, addTodo, updateTodo, deleteTodo, deleteTodos } =
	require("../controllers").todo;

router.use(require("../middleware/auth"));

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.delete("/", deleteTodos);

module.exports = router;
