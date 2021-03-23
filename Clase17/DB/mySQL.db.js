
const options = {
    client: 'mysql',
    connection: {
        host : '192.168.1.50',
        // host : '172.29.96.1',
        // port: '3307',
        user : 'root',
        password : 'admin',
        database : 'prueba'
    },
    pool: {min: 0, max:10}
}

module.exports = {
    options: options
}