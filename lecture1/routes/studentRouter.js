const express = require('express');
const studentController = require('../controllers/studentController')

const router = express.Router();

router.get("", studentController.getStudents);

module.exports = router;