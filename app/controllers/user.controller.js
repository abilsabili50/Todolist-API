const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = {
	register: async (req, res) => {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res
				.status(400)
				.send({ status: "fail", msg: "field cannot be empty" });
		}

		// checking email
		const emailExist = await User.findOne({ email });
		if (emailExist)
			return res
				.status(400)
				.send({ status: "fail", msg: "email already exists" });

		const user = new User({ name, email, password });

		try {
			const savedUser = await user.save();
			res.status(201).send({
				status: "success",
				msg: "user created successfully",
				userId: savedUser._id,
			});
		} catch (error) {
			return res.status(500).send({ status: "fail", msg: error.message });
		}
	},
	login: async (req, res) => {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user)
			return res.status(404).send({ status: "fail", msg: "user not found" });

		if (user.password != password) {
			return res.status(400).send({ status: "fail", msg: "wrong password" });
		}

		const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
			expiresIn: "8h",
		});

		res.send({ status: "success", msg: "login succesfully", token });
	},
};
