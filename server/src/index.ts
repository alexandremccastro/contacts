import "module-alias/register";

import express, { Express } from "express";
import cors from 'cors';
import routes from "./routes";
import { APP_PORT } from "@core/helper/constants";

const app: Express = express();
app.use(express.json());
app.use(cors())

routes.map((route) => {
  app.use(route.path, route.handler);
});

app.listen(APP_PORT, async () => {
  console.log("App is running on port:", APP_PORT);
});
