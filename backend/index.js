const express = require("express");
const app = express();

const { PORT = 8000 } = process.env;

const controller = require("./controller");

app.use(express.json());

app.get("/", controller.hello);

// Informations
app.get("/api/v1/informations", controller.getInformations);

// Users
app.post("/api/v1/register", controller.register);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
