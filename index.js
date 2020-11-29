const customExpress = require('./config/customExpress');
const connection = require('./infraestrutura/connection');
const table = require('./infraestrutura/table');

connection.connect( error => {
    if(error)
        console.log(error)
    else{
        console.log('conectado com sucesso!')

        table.init(connection);

        const app = customExpress();

        app.listen(3000, () => console.log('servidor rodando'));
    }
});
