import { logError } from './api/middlewares/error.js'
import routes from './api/index.js'
import express from 'express'
import cors from 'cors'

// Create a new express application instance
const app = express()

// parse petitions to json and manage cors
app.use(express.json())
app.use(cors())

routes(app)
app.use(logError)

export default app
