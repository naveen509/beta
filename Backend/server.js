const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
// const product = require("./routes/productManagement/product.route");
const path = require("path");
/* Loading the environment variables from the .env file. */
dotenv.config();

//
// ─── SET UP SERVER ──────────────────────────────────────────────────────────────
//

/* Creating an instance of express. */
const app = express();

/* Setting the port to 5000. */
const PORT = process.env.PORT || 8070;

/* Starting the server on the port 5000. */
app.listen(PORT, () => console.log(`Successfully Server started on : ${PORT}`));

/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json());
/* Parsing the cookie and making it available in the req.cookies property. */
// app.use(cookieParser());
/* Allowing the server to accept requests from the client. */
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());

//
// ─── CONNECT TO MONGODB ─────────────────────────────────────────────────────────
//

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DBLINK, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB database', error);
  });

//
// ─── SET UP ROUTES ──────────────────────────────────────────────────────────────
//

//User management routes
// app.use("/admin", require("./routes/userManagement/supplier.router"));
// app.use("/user", require("./routes/userManagement/user.router"));
 app.use("/", require("../Backend/routes/people.router"));
// app.use("/ads", require("./routes/adManagement/ad.router"));
