// controllers/receitasController.js

const Receita = require('../models/receita');

// Operação CREATE - Criar uma nova receita
exports.criarReceita = async (req, res) => {
  try {
    const novaReceita = new Receita(req.body);
    const receitaSalva = await novaReceita.save();
    res.status(201).json(receitaSalva);
  } catch (error) {
    console.error('Erro ao criar receita:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// Operação READ - Listar todas as receitas
exports.listarReceitas = async (req, res) => {
  try {
    const receitas = await Receita.find();
    res.status(200).json(receitas);
  } catch (error) {
    console.error('Erro ao listar receitas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// Operação READ - Obter uma receita pelo ID
exports.obterReceitaPorId = async (req, res) => {
  try {
    const receita = await Receita.findById(req.params.id);
    if (!receita) {
      return res.status(404).json({ message: 'Receita não encontrada' });
    }
    res.status(200).json(receita);
  } catch (error) {
    console.error('Erro ao obter receita:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// Operação UPDATE - Atualizar uma receita pelo ID
exports.atualizarReceita = async (req, res) => {
  try {
    const receitaAtualizada = await Receita.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!receitaAtualizada) {
      return res.status(404).json({ message: 'Receita não encontrada' });
    }
    res.status(200).json(receitaAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar receita:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// Operação DELETE - Excluir uma receita pelo ID
exports.excluirReceita = async (req, res) => {
  try {
    const receitaExcluida = await Receita.findByIdAndRemove(req.params.id);
    if (!receitaExcluida) {
      return res.status(404).json({ message: 'Receita não encontrada' });
    }
    res.status(204).send(); // Retorna 204 (No Content) quando a receita é excluída com sucesso
  } catch (error) {
    console.error('Erro ao excluir receita:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
