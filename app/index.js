const express = require("express");
const app = express();
const port = 6767;

app.get("/", (req, res) => {
  res.send("Examen DAW Despliegue Final (PepeTureatca)");
});

app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});


