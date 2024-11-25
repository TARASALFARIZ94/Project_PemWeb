const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'items'
});

connection.connect((err) => {
    if (err) {
        console.error('Error Koneksi Ke Database', err);
    return;
}
console.log('Berhasil Terhubung Ke Database');
});

module.exports = connection.promise();