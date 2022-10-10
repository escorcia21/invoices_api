import Joi from 'joi'

const date = Joi.date().max('now')
const client = Joi.string().min(1).max(255)
const discount = Joi.number().min(0).max(100)

export const invoiceCreateSchema = Joi.object({
    clientID: client.required(),
    date: date.required(),
    discount: discount.required(),
})