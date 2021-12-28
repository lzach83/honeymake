import express, {Request, Response, Application, Router} from "express"
import router from "./router"
import {authService, firebaseAdmin} from "./services"

const app: Application = express()

const PORT = 8000

app.use(express.json())
app.use(router)

app.listen(PORT, (): void => {
  console.log(`Server is running here ${PORT}`)
})
