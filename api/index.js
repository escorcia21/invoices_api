import { Router } from 'express'
import invoicesRouter from './routes/invoices.route.js'
import productsRouter from './routes/products.route.js'
import clientsRouter from './routes/clients.route.js'
import detailsRouter from './routes/details.route.js'

export default function ( app ) {
    const router = Router()
    app.use('/EdgeAPP', router)
    router.use('/invoices', invoicesRouter)
    router.use('/products', productsRouter)
    router.use('/clients', clientsRouter)
    router.use('/details', detailsRouter)
}