const Produto = require('../models/products');

module.exports = app => {
    app.get('/', (req,res) => {

        const productList = Produto.read(res);

    }); 

    app.post('/', (req,res) => {

        const product = req.body;

        Produto.create(product, res);
        
    });

    app.get('/:id', (req, res) => Produto.readByID(req, res));

    app.put('/:id', (req, res) => {
        
        const product = req.body;

        Produto.update(req, res, product);
    });

    app.delete('/:id', (req, res) => Produto.delete(req, res));
}