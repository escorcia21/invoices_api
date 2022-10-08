import { logError } from './api/middlewares/error.js'
import routes from './api/index.js'
import express from 'express'
import cors from 'cors'

const whitelist = ['http://127.0.0.1:3000']

// Configure CORS
const options = {
  origin: (origin,callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null,true);
    }else {
      callback(new Error('Not in whitelist'),false);
    }
  },
  optionsSuccessStatus: 200
};

// Create a new express application instance
const app = express()

// parse petitions to json and manage cors
app.use(express.json())
app.use(cors(options))

routes(app)
app.use(logError)

export default app
