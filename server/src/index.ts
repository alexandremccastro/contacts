import 'module-alias/register'
import 'dotenv/config'
import express, { Express } from 'express'

import routes from "./routes";

const app: Express = express()

const APP_PORT = process.env.APP_PORT || 3000

routes.map((route) => {
  app.use(route.path, route.handler)
})

app.listen(APP_PORT, () => {
  console.log("App is running on port:", APP_PORT)
})
