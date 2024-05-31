const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
require("dotenv").config();
const xss = require("xss-clean");
const PORT = process.env.PORT || 3500;
const mongoose = require("mongoose");


// custom middleware logger

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());
app.use(xss());
// routes
app.use("/", require("./routes/root"));

app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/logout", require("./routes/logout"));
app.use(verifyJWT);

app.use("/registerRequest", require("./routes/api/registerRequest"));

app.use("/employees", require("./routes/api/employees"));
app.use('/child', require('./routes/api/children'));
app.use('/notif', require('./routes/api/notif'));

app.all("*", (req, res) => {
	res.status(404);
	if (req.accepts("html")) {
		res.sendFile(path.join(__dirname, "views", "404.html"));
	} else if (req.accepts("json")) {
		res.json({ error: "404 Not Found" });
	} else {
		res.type("txt").send("404 Not Found");
	}
});

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("connected to database");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err=>console.log(err));