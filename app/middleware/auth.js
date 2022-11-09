const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) return res.status(403).send({ status: "fail", msg: "forbidden" });

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		if (!decoded._id)
			return res.status(401).send({ status: "fail", msg: "unauthorized" });
		req.user = decoded._id;
		next();
	} catch (error) {
		return res.status(500).send({ status: "fail", msg: error.message });
	}
};
