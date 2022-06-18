const { Router } = require("express");
const {
  getAllRegisters,
  checkOut,
  checkIn,
  cancelled,
  getRegister,
} = require("../controllers/registration.controller");

const registrationRouter = Router();

registrationRouter.get("/", getAllRegisters);

registrationRouter.post("/", checkIn);

registrationRouter
  .route("/:employee")
  .get(getRegister)
  .patch(checkOut)
  .delete(cancelled);

module.exports = { registrationRouter };
