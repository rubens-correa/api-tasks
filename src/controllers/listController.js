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
  const { title, description, status } = req.body;

  try {
    const date = new Date().toLocaleString();
    const result = await pool.query(
      'INSERT INTO tasks (title, description, date, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, date, status || 'Pendente']
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erro do Servidor Interno' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *',
      [title, description, id]
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
