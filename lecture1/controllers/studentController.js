const Students = require('../models/students')
exports.getStudents = (req, res) => {
  const students = Students.getAll();
  res.status(200).send({success: true, data: students})
}