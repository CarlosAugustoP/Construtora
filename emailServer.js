const { sendEmail } = require('./sendEmail');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    console.log('Nova mensagem recebida:', req.body);
    res.send('Mensagem recebida com sucesso');

    const { name, email, telephone, message } = req.body;
    sendEmail(name, email, telephone, message);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
