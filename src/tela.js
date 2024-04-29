// Importando o módulo 'fs' para manipulação de arquivos
const fs = require('fs');

// Importando o módulo 'path' para lidar com caminhos de arquivos
const path = require('path');

// Função para ler o conteúdo do arquivo HTML
const readHTMLFile = (filePath, callback) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, html) => {
        if (err) {
            throw err;
        } else {
            callback(html);
        }
    });
};

// Caminho do arquivo index.html
const indexPath = path.join(__dirname, 'index.html');

// Função para lidar com as requisições para tela.js
module.exports = (req, res) => {
    // Lendo o conteúdo do arquivo index.html
    readHTMLFile(indexPath, (html) => {
        // Enviando o conteúdo HTML como resposta
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    });
};
