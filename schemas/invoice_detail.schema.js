import Joi from 'joi'

const detailID = Joi.string().min(1).max(255)
const invoiceID = Joi.string().min(1).max(255)
const productID = Joi.string().min(1).max(255)
const quantity = Joi.number()
const total = Joi.number()

export const detailCreateSchema = Joi.object({
    detailID: detailID.required(),
    invoiceID: invoiceID.required(),
    productID: productID.required(),
    quantity: quantity.required(),
    total: total.required()
})