//1 require express
const express = require("express");
//2 instance express
const app = express();
// 5 require dotenv
require("dotenv").config();
//6 require connect DB
const connectDB = require("./config/connectDB");
connectDB();
//8 Middleware Body parser
app.use(express.json());

//7 require les routes (methode genral pour fonctionner les router.method dans le fichier contact.js)
// app.use("/api/contacts", require("./routes/contact")) ( 1 ére methode c est une methode juste aussi)
// const router = require("./routes/contact");
// app.use("/api/contacts", router);
app.use("/api/contacts", require("./routes/contact"));
//3 create Port
const PORT = process.env.PORT;
// const PORT = 5000;
//4 create server
app.listen(PORT, (error) =>
  error
    ? console.error(`failed to connect to server !!! ${error}`)
    : console.log(`server is runnig http://localhost:${PORT} ....`)
);
