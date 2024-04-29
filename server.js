
const express = require('express');
const path = require('path');
const tela = require('./src/tela.js');


// Criando uma instância do aplicativo Express
const app = express();

// Rota para a página inicial
app.get('/', (req, res) => {
    // Requerindo e executando o arquivo tela.js
    try {
        require('./src/tela.js')(req, res);
    } catch (error) {
        console.error('Erro ao executar o código do arquivo tela.js:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciando o servidor e ouvindo a porta definida
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
