import { InvoiceDetail } from '../../models/invoice_detail.model.js'
import { QueryTypes } from 'sequelize'
import {v4 as uuid} from 'uuid'
import { Product } from '../../models/product.model.js'

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
        const { invoiceID, products }  = req.body
        const query = `SELECT price FROM products WHERE productID = ?`
        const details = await Promise.all(products.map(async (product) => {
            const { productID, quantity } = product
            const [ productPrice ] = await Product.sequelize.query(query, {
                replacements: [productID],
                type: QueryTypes.SELECT
            })

            return {
                detailID: uuid(),
                invoiceID,
                productID,
                quantity,
                total: productPrice.price * quantity 
            }
        }))


        const result = await InvoiceDetail.bulkCreate(details)
        
        res.status(201).json({
            estatus: 201,
            message: 'Details created successfully',
            result
        })
    } catch (err) {
        next(err)
    }
}