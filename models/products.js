const connection = require('../infraestrutura/connection');

class Product {
    create(product, res) {
        const sql  = 'INSERT INTO Produtos SET ?'

        connection.query(sql, product, (erro, results) => {
            if(erro)
                res.json(erro)
            else {
                res.json(results)
            }
        })
    }

    read(res) {
        const sql = 'SELECT * FROM Produtos'

        connection.query(sql, (erro, results) => {
            if(erro)
                res.json(erro)
            else 
                res.json(results)
        })
    }

    readByID(req, res) {
        const { id } = req.params;

        const sql = 'SELECT * FROM Produtos WHERE id = ' + id

        connection.query(sql, (erro, results) => {
            if(erro)
                res.json(erro)
            else
                res.json(results)
        })
    }

    update(req, res, product){
        const { id } = req.params;
        const { nome, preco} = product;
        
        const sql = "UPDATE Produtos SET nome = '"+ nome +"', preco = "+ preco +" WHERE id = "+ id

        connection.query(sql, (error, results) => {
            if(error)
                res.json(error)
            else
                res.json(results)
        })
    }

    delete(req, res) {
        const { id } = req.params;

        const sql = "DELETE FROM Produtos WHERE id = "+ id

        connection.query(sql, (error, results) => {
            if(error)
                res.json(error)
            else 
                res.json(results)
        })
    }
}

module.exports = new Product