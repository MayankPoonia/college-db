const Student = require("../models/studentModel");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.getAll();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, roll, department } = req.body;
    const id = await Student.create({ name, roll, department });
    res.status(201).json({ message: "Student added", studentId: id });
  } catch (err) {
    res.status(500).json({ error: "Failed to create student" });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.delete(id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete student" });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, roll, department } = req.body;
    await Student.update(id, { name, roll, department });
    res.json({ message: "Student updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update student" });
  }
};
