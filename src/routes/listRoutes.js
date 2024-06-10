const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

// Rotas do CRUD
router.get('/todolist', listController.fullList);
router.post('/todolist', listController.createTask);
router.put('/todolist/:id', listController.updateTask);
router.delete('/todolist/:id', listController.deleteTask);

module.exports = router;
