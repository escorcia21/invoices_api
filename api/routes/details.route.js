import { getInvoiceDetail, createInvoiceDetail } from "../controllers/invoices_details.controller.js"
import { validatorHandler } from "../middlewares/validator.js"
import { detailCreateSchema } from "../../schemas/invoice_detail.schema.js"
import { Router } from "express"

const router = Router()

router.get('/:id', getInvoiceDetail)
router.post('/', validatorHandler(detailCreateSchema,'body'), createInvoiceDetail)

export default router