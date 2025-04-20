const db = require("../db/db");

const Student = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM students");
    return rows;
  },

  create: async ({ name, roll, department }) => {
    const [result] = await db.query(
      "INSERT INTO students (name, roll, department) VALUES (?, ?, ?)",
      [name, roll, department]
    );
    return result.insertId;
  },

  delete: async (id) => {
    await db.query("DELETE FROM students WHERE id = ?", [id]);
  },

  update: async (id, { name, roll, department }) => {
    await db.query(
      "UPDATE students SET name = ?, roll = ?, department = ? WHERE id = ?",
      [name, roll, department, id]
    );
  },
};

module.exports = Student;
