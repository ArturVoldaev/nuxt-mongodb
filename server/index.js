require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const { loadNuxt, build } = require("nuxt");
const isDev = process.env.NODE_ENV !== "production";

const cardRoutes = require("./routes/card");
app.use("/api/card", cardRoutes);

async function main() {
  mongoose.connect(`mongodb://localhost/${process.env.DATABASE}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  const nuxt = await loadNuxt(isDev ? "dev" : "start");
  app.use(nuxt.render);
  if (isDev) {
    build(nuxt);
  }
  app.listen(process.env.PORT);

}

main();
