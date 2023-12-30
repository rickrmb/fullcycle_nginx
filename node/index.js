const express = require('express');
const app = express();
const port = 3000;

// Configuração do banco de dados
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

// Usando mysql2
const mysql = require('mysql2');

// Criar conexão com o banco de dados
const connection = mysql.createConnection(config);

// Query SQL para inserir dados
const sql = `INSERT INTO people(name) values('minha_nossa')`;

// Executando a query
connection.query(sql, (error, results, fields) => {
    if (error) {
        return console.error('Erro na query: ' + error.message);
    }
    console.log('Registro inserido com sucesso');
});

// Fechar a conexão
connection.end();

// Rota do express
app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
