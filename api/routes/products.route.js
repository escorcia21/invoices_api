import { getProducts, createProduct } from "../controllers/products.controller.js"
import { validatorHandler } from "../middlewares/validator.js"
import { createProductSchema } from "../../schemas/product.schema.js"
import { Router } from "express"

const router = Router()

router.get('/', getProducts)
router.post('/', validatorHandler(createProductSchema,'body') ,createProduct)

export default router