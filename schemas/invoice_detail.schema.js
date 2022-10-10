import Joi from 'joi'

const invoiceID = Joi.string().uuid()
const productID = Joi.string().min(1).max(255)
const quantity = Joi.number()

const productDetailShema = Joi.object({
    productID: productID.required(),
    quantity: quantity.required(),
})


const products = Joi.array().items(productDetailShema).min(1)
export const detailCreateSchema = Joi.object({
    invoiceID: invoiceID.required(),
    products: products.required(),
})
