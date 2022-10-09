import { InvoiceDetail } from '../../models/invoice_detail.model.js'

export const getInvoiceDetail = async (req, res) => {
    try {
        const { id } = req.params
        const details = await InvoiceDetail.findOne(
            {
                where: {
                    invoiceID: id
                }
            }
        )
        res.status(200).json(
            {
                estatus: 200,
                results: details
            }
        )
    } catch (err) {
        next(err)
    }
}

export const createInvoiceDetail = async (req, res, next) => {
    try {
        const { detailID, quantity, total, invoiceID, productID }  = req.body
        await InvoiceDetail.create({
            detailID,
            quantity,
            total,
            invoiceID,
            productID
        })
        res.status(201).json({
            estatus: 201,
            message: 'Details created successfully',
        })
    } catch (err) {
        next(err)
    }
}