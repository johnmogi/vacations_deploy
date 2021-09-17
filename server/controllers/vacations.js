const express = require("express");
const vacsLogic = require("../database/vacations-logic");
const router = express.Router();
// GET http://localhost:3000/api/vacations
router.get("/vacations", async (request, response) => {
  try {
    const vacs = await vacsLogic.getAllVacsAsync();
    response.json(vacs);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET http://localhost:3000/api/vacations/1
router.get("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const vac = await vacsLogic.getOneVacAsync(id);
    response.json(vac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
router.post("/vacations", async (request, response) => {
  try {
    const vac = request.body;
    const addedVac = await vacsLogic.addVacAsync(vac);
    response.status(201).json(addedVac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
router.delete("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const vac = await vacsLogic.deleteOneVacAsync(id);
    response.json(vac);
  } catch (err) {
    response.status(200);
  }
});

module.exports = router;
