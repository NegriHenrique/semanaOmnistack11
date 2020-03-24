const express = require("express");

const OngController = require("./constrollers/OngController");
const IncidentsController = require("./constrollers/IncidentsController");
const ProfileController = require("./constrollers/ProfileController");
const SessionController = require("./constrollers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.index);

routes.get("/profile", ProfileController.index);

routes.post("/incidents", IncidentsController.create);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
