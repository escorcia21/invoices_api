import { Client } from "../../models/client.model.js"

export const getClients = async (req, res, next) => {
    try {
        const clients = await Client.findAll()
        res.status(200).json(
            {
                estatus: 200,
                results: clients
            }
        )
    } catch (err) {
        next(err)
    }
}

export const createClient = async (req, res, next) => {
    try {
        const { clientID, client_name, point_of_contact, phone_number, email }  = req.body
        await Client.create({
            clientID,
            client_name,
            point_of_contact,
            phone_number,
            email
        })
        res.status(201).json({
            estatus: 201,
            message: 'Client created successfully',
        })
    } catch (err) {
        next(err)
    }
}