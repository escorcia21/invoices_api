import { Router } from "express"
import { getInvoices, createInvoice } from "../controllers/invoices.controller.js"

const router = Router()

router.get('/', getInvoices)
router.post('/', createInvoice)

export default router