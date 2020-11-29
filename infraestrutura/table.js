class Tabelas  {
    init(conexao) {

        this.conexao = conexao

        console.log('Tabelas chamadas');

        this.criarProdutos();
    }

    criarProdutos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(30) NOT NULL, preco float NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro)
                console.log(erro)
            else
                console.log('Tabela Produtos criada com sucesso!');

        })
    }
}

module.exports = new Tabelas