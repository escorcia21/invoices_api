export const logError = (err, req, res, next) => {
    console.error(err.message)
    next(err)
}