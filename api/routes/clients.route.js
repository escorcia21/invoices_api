import { getClients, createClient } from "../controllers/clients.controller.js"
import { Router } from "express"

const router = Router()

router.get('/', getClients)
router.post('/', createClient)

export default router