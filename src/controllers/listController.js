const pool = require('../connection');

const getTaskList = async () => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const fullList = async (req, res) => {
  try {
    const taskList = await getTaskList();
    res.json(taskList);
  } catch (error) {
    res.status(500).json({ message: 'Erro no Servidor Interno' });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: 'Título e Descrição são obrigatórios.' });
  }
  try {
    const date = new Date().toLocaleString();
    const result = await pool.query(
      'INSERT INTO tasks (title, description, date) VALUES ($1, $2, $3) RETURNING *',
      [title, description, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erro do Servidor Interno' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const result = await pool.query(
      'UPDATE tasks SET description = $1 WHERE id = $2 RETURNING *',
      [description, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'A tarefa não foi encontrada.' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erro do Servidor Interno' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'A tarefa não foi encontrada.' });
    }
    res.json({ message: 'Tarefa deletada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro do Servidor Interno' });
  }
};

module.exports = { fullList, createTask, updateTask, deleteTask };
