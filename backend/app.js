import express from "express";
import { restRouter } from "./src";
import DB from "./config/db";
import CROS from "./middlewares/cors";

const app = express();
const port = 3000;
app.use(express.json());
app.use(CROS.handleCors);

DB.connect();

app.use("/", restRouter);

app.listen(port, () => {
  console.log(`example with listening at http://localhost${port}`);
});
