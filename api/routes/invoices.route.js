import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
    res.send('Invoices list')
})

router.post('/', (req, res) => {
    res.send('Invoice created')
})

export default router