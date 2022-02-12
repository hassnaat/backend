const express = require('express');
const studentController = require('../controller/student');
const bookController = require('../controller/book');
const borrowController = require('../controller/borrow');

const router = express.Router();

router.get('/students', studentController.getStudents);
router.get('/students/:id', studentController.getStudent);
router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBook);

router.post('/students', studentController.createStudent);
router.post('/books', bookController.createBook);
router.post('/borrow', borrowController.borrowBook);

module.exports = router;
