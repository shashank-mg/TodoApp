const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoroutes = require("./routes/todoRoutes"); // Express Router
const todoControllers = require("./controllers/todoControllers");
const dbUri = require("./config/keys"); //add your mongo db connect url
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000))
  .catch((e) => console.log(e));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", todoControllers.landingPage);

app.get("/home", todoControllers.homeRedirect);

app.get("/createtodo", todoControllers.todoCreation);

app.post("/home", todoControllers.createAndBackToHome);

app.use(todoroutes); // Express Router

app.use(todoControllers.notFound);
