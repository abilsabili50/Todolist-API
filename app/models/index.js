const mongoose = require("mongoose");

module.exports = {
	User: mongoose.model("user", require("./user.model")),
	Todo: mongoose.model("todo", require("./todo.model")),
};
