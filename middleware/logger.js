module.exports = (req, res, next) => {
    res.send("middleware executed")

    next()
}