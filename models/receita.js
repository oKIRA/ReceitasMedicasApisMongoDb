const mongoose = require('mongoose');

const medicamentoSchema = new mongoose.Schema({
  nome: String,
  categoria: String,
  codigoAnvisa: String,
});

const receitaSchema = new mongoose.Schema({
  paciente: {
    nome: String,
    cpf: String,
    dataNascimento: String,
  },
  medicamentos: [medicamentoSchema],
});

module.exports = mongoose.model('Receita', receitaSchema);
