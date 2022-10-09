import { getClients, createClient } from "../controllers/clients.controller.js"
import { validatorHandler } from "../middlewares/validator.js"
import { createClientSchema } from "../../schemas/client.schema.js"
import { Router } from "express"

const router = Router()

router.get('/', getClients)
router.post('/', validatorHandler(createClientSchema,'body'), createClient)

export default router