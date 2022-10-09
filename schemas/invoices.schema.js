import Joi from 'joi'

const invoice_number = Joi.string().min(1).max(255)
const date = Joi.date()
const client = Joi.string().min(1).max(255)
const subtotal = Joi.number()
const discount = Joi.number()
const total = Joi.number()

export const invoiceCreateSchema = Joi.object({
    invoice_number: invoice_number.required(),
    clientID: client.required(),
    date: date.required(),
    subtotal : subtotal.required(),
    total: total.required(),
    discount: discount.required(),
})