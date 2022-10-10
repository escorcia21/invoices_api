import { Invoice } from '../../models/invoice.model.js'
import { InvoiceDetail } from '../../models/invoice_detail.model.js'
import { Product } from '../../models/product.model.js'
import { v4 as uuid } from 'uuid'

export const getInvoices = async (req, res, next) => {
    console.log('getInvoices')
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
    console.log('createInvoice')
    try {
        const { clientID, date, discount }  = req.body
        const invoice_number = uuid()
        await Invoice.create({
            invoice_number,
            clientID,
            date,
            discount
        })
        res.status(201).json({
            estatus: 201,
            message: 'Invoice created successfully',
            invoice_number
        })
    } catch (err) {
        next(err)
    }
}