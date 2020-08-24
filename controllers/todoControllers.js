const Todos = require("../model/todos");

const landingPage = (req, res) => {
  Todos.find()
    .sort()
    .then((data) => res.render("home", { data }))
    .catch((e) => console.log(e));
};

const homeRedirect = (req, res) => res.redirect("/");

const todoCreation = (req, res) => res.render("createTodo");

const notFound = (req, res) => res.render("404");

const createAndBackToHome = (req, res) => {
  const todo = new Todos(req.body);
  todo
    .save()
    .then(() => res.redirect("/"))
    .catch((e) => console.log(e));
};

const getDetails = (req, res) => {
  const id = req.params.id;
  Todos.findById(id)
    .then((result) => res.render("details", { result }))
    .catch((err) => res.render("404"));
};

const deleteDetails = (req, res) => {
  const id = req.params.id;
  Todos.findByIdAndDelete(id)
    .then(() => res.json({ redirect: "/home" }))
    .catch((e) => console.log(e));
};

module.exports = {
  landingPage,
  homeRedirect,
  todoCreation,
  notFound,
  createAndBackToHome,
  getDetails,
  deleteDetails,
};
