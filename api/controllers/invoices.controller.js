import { Invoice } from '../../models/invoice.model.js'

export const getInvoices = async (req, res) => {
    try {
        const clients = await Invoice.findAll()
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

export const createInvoice = async (req, res, next) => {
    try {
        const { invoice_number, clientID, date, subtotal, total, discount }  = req.body
        await Invoice.create({
            invoice_number,
            clientID,
            date,
            subtotal,
            total,
            discount
        })
        res.status(201).json({
            estatus: 201,
            message: 'Invoice created successfully',
        })
    } catch (err) {
        next(err)
    }
}