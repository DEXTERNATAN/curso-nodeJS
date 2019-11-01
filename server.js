const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.set("useFindAndModify", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);
mongoose
  .connect("mongodb://localhost:27017/node-api", {})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Injeta automaticamente todos os models criados
requireDir("./src/models");

// Primeira rota
app.use("/api", require("./src/routes"));

app.listen(3001);
