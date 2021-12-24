const db = require("../config/database");

const createUser = async (req, res) => {
  const { userName, email } = req.body;
  const { rows } = await db.query(
    "INSERT INTO users (userName, email) VALUES ($1, $2)",
    [userName, email]
  );

  res.status(201).send({
    message: "User added successfully!",
    body: {
      user: { userName, email },
    },
  });
};

const listAllUsers = async (req, res) => {
  const response = await db.query("SELECT * FROM users ORDER BY userName ASC");
  res.status(200).send(response.rows);
};

const findUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM users WHERE userid = $1", [
    userId,
  ]);
  res.status(200).send(response.rows);
};

const updateUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { userName, email } = req.body;

  const response = await db.query(
    "UPDATE users SET userName = $1, email = $2 WHERE userId = $3",
    [userName, email, userId]
  );

  res.status(200).send({ message: "User Updated Successfully!" });
};

const deleteUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  await db.query("DELETE FROM users WHERE userId = $1", [userId]);

  res.status(200).send({ message: "User deleted successfully!", userId });
};

module.exports = {
  createUser,
  listAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
};
