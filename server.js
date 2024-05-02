
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

app.get('/cadastro', (req, res) => {
    // Requerindo e executando o arquivo tela.js
    try {
        require('./src/cadastro1.js')(req, res);
    } catch (error) {
        console.error('Erro ao executar o código do arquivo tela.js:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.get('/perfil', (req, res) => {
    // Requerindo e executando o arquivo tela.js
    try {
        require('./src/perfil.js')(req, res);
    } catch (error) {
        console.error('Erro ao executar o código do arquivo tela.js:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.get('/novidades', (req, res) => {
    // Requerindo e executando o arquivo tela.js
    try {
        require('./src/novidades.js')(req, res);
    } catch (error) {
        console.error('Erro ao executar o código do arquivo tela.js:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.get('/saibamais', (req, res) => {
    // Requerindo e executando o arquivo tela.js
    try {
        require('./src/saibamais.js')(req, res);
    } catch (error) {
        console.error('Erro ao executar o código do arquivo tela.js:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.get('/login', (req, res) => {
    // Requerindo e executando o arquivo tela.js
    try {
        require('./src/login.js')(req, res);
    } catch (error) {
        console.error('Erro ao executar o código do arquivo tela.js:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.get('/forms', (req, res) => {
    // Requerindo e executando o arquivo tela.js
    try {
        require('./src/forms.js')(req, res);
    } catch (error) {
        console.error('Erro ao executar o código do arquivo tela.js:', error);
        res.status(500).send('Erro interno do servidor');
    }
});
app.get('/forms2', (req, res) => {
    // Requerindo e executando o arquivo tela.js
    try {
        require('./src/forms.js')(req, res);
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
