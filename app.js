const express = require("express");
const { registrationRouter } = require("./routes/registration.routes");
const { db } = require("./utils/database");

const app = express();

app.use(express.json());

db.sync();

app.use("/api/v1/registration", registrationRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`App running at port ${process.env.PORT}`);
});
