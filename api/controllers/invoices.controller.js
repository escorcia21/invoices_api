export const getInvoices = async (req, res) => {
    res.send("invoice list")
}

export const createInvoice = async (req, res, next) => {
    res.send("invoice created")
}