const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Configuração do MongoDB
mongoose.connect('mongodb+srv://luanoliveira11:14192122%40Ab@cluster0.epnwvzz.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Middleware para análise do corpo da solicitação JSON
app.use(express.json());

// Rotas de Receitas
const receitasRoutes = require('./routes/receitasRoutes');
app.use('/api', receitasRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
