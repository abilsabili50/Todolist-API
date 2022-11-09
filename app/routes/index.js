const router = require("express").Router();

router.use("/", require("./user.route"));
router.use("/todo", require("./todo.route"));

module.exports = router;
