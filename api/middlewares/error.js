export const logError = (err, req, res, next) => {
    try {
        res.status(400).json({
            estatus: 400,
            message: 'Something broke!',
            error: err.errors[0].message,
        })
    } catch {
        res.status(400).json({
            status: 400,
            error: err.message,
        })    
    }
}