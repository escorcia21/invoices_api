export const logError = (err, req, res, next) => {
    res.status(400).json({
        estatus: 400,
        message: 'Something broke!',
        error: err.errors[0].message,
    })
    // next(err)
}