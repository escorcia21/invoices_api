import Joi from "joi"

const productID = Joi.string().min(1).max(255)
const product_name = Joi.string().min(1).max(255)
const description = Joi.string().min(1).max(255)
const price = Joi.number().min(1)

export const createProductSchema = Joi.object({
    productID: productID.required(),
    product_name: product_name.required(),
    description: description.required(),
    price: price.required()
})

export const updateProductSchema = Joi.object({
    product_name,
    description,
    price,
})


