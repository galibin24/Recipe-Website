const express = require("express");
const path = require("path");
const app = express();

// console.log(path.join(__dirname, "../build"));

app.use(express.static(path.join(__dirname, "../build")));

if (process.env.NODE_ENV === "production") {
	app.get("/*", function (req, res) {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	});
}

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000);
