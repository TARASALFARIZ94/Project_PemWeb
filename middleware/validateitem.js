module.exports = (req,res,next) => {
    const { name, price } = req.body;
    if (!name || typeof price !== 'number') {
        return res.status(400).send('Price Harus Angka');
    }
    next();
}