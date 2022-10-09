import Joi from "joi"

const clientID = Joi.string().min(1).max(255)
const client_name = Joi.string().min(1).max(255)
const point_of_contact = Joi.string().min(1).max(255)
const phone_number = Joi.string().min(1).max(255)
const email = Joi.string().min(1).max(255)

export const createClientSchema = Joi.object({
    clientID: clientID.required(),
    client_name: client_name.required(),
    point_of_contact: point_of_contact.required(),
    phone_number: phone_number.required(),
    email: email.required()
})

export const updateClientSchema = Joi.object({
    client_name,
    point_of_contact,
    phone_number,
    email,
})
