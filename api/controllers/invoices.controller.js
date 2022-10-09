import { Invoice } from '../../models/invoice.model.js'
import { InvoiceDetail } from '../../models/invoice_detail.model.js'
import { Product } from '../../models/product.model.js'

export const getInvoices = async (req, res, next) => {
    try {
        const invoices = await Invoice.findAll({
            include: {
                model: InvoiceDetail,
                include: Product
            }
        })
        res.status(200).json(
            {
                estatus: 200,
                results: invoices
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