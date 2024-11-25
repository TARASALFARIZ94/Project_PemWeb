const db = require('../config/database');

exports.CreateItem = async (req, res) => {
    try {
        const { name, description, price} = req.body;
        const [result] = await db.execute(
            'INSERT INTO item (name,description,price) VALUES (?,?,?)',
            [name,description,price]
        );
        res.status(201).send('Item Berhasil Dibuat');
    } catch (error){
        res.status(400).send('Gagal Membuat Item' + error.message);
    }
}
exports.GetItems = async (req, res) => {
    try {
    const [items] = await db.execute('SELECT * FROM item');
    res.json(items);
} catch (error) {
    res.status(400).send('Gagal Mendapatkan Item' + error.message);
};
}
exports.updateItem = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, description, price} = req.body;
        const [result] = await db.execute(
            'UPDATE item SET name=?, description=?, price=? WHERE id=?',
            [name,description,price,id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).send('Item Tidak Ditemukan');
    }
    res.send('Item Berhasil Di Update');
} catch (error){
    res.status(400).send('Gagal Mengupdate Item' + error.message);
}
}
exports.DeleteItem = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await db.execute('DELETE FROM item WHERE id=?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).send('Item Tidak Ditemukan');
        }
        res.send('Item Berhasil Dihapus');
    } catch (error){
        res.status(400).send('Gagal Menghapus Item' + error.message);
    }
}
