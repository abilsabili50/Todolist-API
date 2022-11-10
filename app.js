const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/config");

db.then(() => {
	console.log("database connected");
}).catch((err) => {
	console.log(err);
});

app.get("/", (req, res) => {
	res.sendFile("./index.html");
});

app.use("/api", require("./app/routes"));

app.listen(process.env.PORT, () => {
	console.log("server running on http://localhost:" + process.env.PORT);
});
