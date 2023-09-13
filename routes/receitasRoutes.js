// routes/receitasRoutes.js

const express = require('express');
const router = express.Router();
const receitasController = require('../controllers/receitasController');

// Rota para criar uma nova receita
router.post('/receitas', receitasController.criarReceita);

// Rota para listar todas as receitas
router.get('/receitas', receitasController.listarReceitas);

// Rota para obter uma receita pelo ID
router.get('/receitas/:id', receitasController.obterReceitaPorId);

// Rota para atualizar uma receita pelo ID
router.put('/receitas/:id', receitasController.atualizarReceita);

// Rota para excluir uma receita pelo ID
router.delete('/receitas/:id', receitasController.excluirReceita);

module.exports = router;
