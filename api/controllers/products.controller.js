import { Product } from "../../models/product.model.js"

export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll()
        res.status(200).json(
            {
                estatus: 200,
                results: products
            }
        )
    } catch (err) {
        next(err)
    }
}

export const createProduct = async (req, res, next) => {
    try {
        const { productID, product_name, description, price } = req.body
        await Product.create({
            productID,
            product_name,
            description,
            price
        })
        res.status(201).json({
            estatus: 201,
            message: 'Product created successfully',
        })
    } catch (err) {
        next(err)
    }
}