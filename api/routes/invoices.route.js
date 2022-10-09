import { getInvoices, createInvoice } from "../controllers/invoices.controller.js"
import { validatorHandler } from '../middlewares/validator.js'
import { invoiceCreateSchema } from '../../schemas/invoices.schema.js'
import { Router } from "express"

const router = Router()

router.get('/', getInvoices)
router.post('/',validatorHandler(invoiceCreateSchema, 'body') , createInvoice)

export default router