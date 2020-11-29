const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: '192.168.15.171',
    port: 3306,
    user: 'admin',
    password: 'Nightas1!',
    database: 'crud'
})

module.exports = conexao