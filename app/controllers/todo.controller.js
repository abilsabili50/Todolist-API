const { Todo } = require("../models");

module.exports = {
	getTodos: async (req, res) => {
		try {
			const todos = await Todo.find(
				{ author: req.user },
				"-_id id title status"
			);
			res.send({ status: "success", msg: "all todos found", data: todos });
		} catch (error) {
			return res.status(500).send({ status: "fail", msg: error.message });
		}
	},
	getTodo: async (req, res) => {
		const { id } = req.params;
		try {
			const todo = await Todo.findOne(
				{ id: id, author: req.user },
				"-_id id title desc status"
			);

			if (!todo)
				return res.status(404).send({ status: "fail", msg: "todo not found" });

			res.send({ status: "success", msg: "todo found", data: todo });
		} catch (error) {
			return res.status(500).send({ status: "fail", msg: error.message });
		}
	},
	addTodo: async (req, res) => {
		const { title, desc } = req.body;

		if (!title)
			return res
				.status(400)
				.send({ status: "fail", msg: "title can't be empty" });

		const lastId = await Todo.find({ author: req.user })
			.sort({ id: -1 })
			.limit(1);

		const id = !lastId[0] ? 1 : lastId[0].id + 1;

		const todo = new Todo({
			id,
			title,
			desc,
			status: false,
			author: req.user,
		});

		try {
			const savedTodo = await todo.save();
			res.status(201).send({
				status: "success",
				msg: "todo created successfully",
				todoId: savedTodo.id,
			});
		} catch (error) {
			return res.status(500).send({ status: "fail", msg: error.message });
		}
	},
	updateTodo: async (req, res) => {
		const { id } = req.params;

		if (!req.body)
			return res
				.status(400)
				.send({ status: "fail", msg: "body can't be empty" });

		try {
			const checker = await Todo.findOne({ id, author: req.user });

			if (!checker)
				return res.status(404).send({ status: "fail", msg: "Todo not found" });

			await Todo.findOneAndUpdate({ id, author: req.user }, { ...req.body });
			res.send({
				status: "success",
				msg: "todo updated successfully",
			});
		} catch (error) {
			return res.status(500).send({ status: "fail", msg: error.message });
		}
	},
	deleteTodo: async (req, res) => {
		const { id } = req.params;

		try {
			const checker = await Todo.findOne({ id, author: req.user });
			if (!checker)
				return res.status(404).send({ status: "fail", msg: "Todo not found" });

			await Todo.deleteOne({ id, author: req.user });
			res.send({ status: "success", msg: "todo deleted successfully" });
		} catch (error) {
			return res.status(500).send({ status: "fail", msg: error.message });
		}
	},
	deleteTodos: async (req, res) => {
		try {
			await Todo.deleteMany({ author: req.user });
			res.send({ status: "success", msg: "all todos deleted successfully" });
		} catch (error) {
			return res.status(500).send({ status: "fail", msg: error.message });
		}
	},
};
