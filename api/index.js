import invoicesRouter from './routes/invoices.route.js';
import { Router } from "express"

export default function ( app ) {
    const router = Router()
    app.use('/invoices', router)
    router.use('/', invoicesRouter)
}