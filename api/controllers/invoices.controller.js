import { Invoice } from '../../models/invoice.model.js'
import { QueryTypes } from 'sequelize'
import { v4 as uuid } from 'uuid'

export const getInvoices = async (req, res, next) => {
    try {
        const query = `
            SELECT  invoices.invoice_number, 
                clients.client_name,
                invoices.date as "date",
                invoices.discount,
                subtotal.subtotal,
                (subtotal.subtotal - (subtotal.subtotal*invoices.discount/100)) as "total"
                FROM clients
            JOIN invoices ON invoices.clientID=clients.clientID
            JOIN (
            	SELECT 
               SUM(total) as "subtotal", 
               invoiceID as "id" 
               FROM invoice_details 
               GROUP BY invoiceID
               ) subtotal
            ON subtotal.id=invoices.invoice_number
        `
        const invoices = await Invoice.sequelize.query(query,{
            type: QueryTypes.SELECT
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