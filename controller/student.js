const db = require("../db/db")

class StudentController {
  async createStudent(req, res) {
    const { firstName, lastName } = req.body
    try {
      const student = await db('student')
        .insert({
          first_name: firstName,
          last_name: lastName,
        })
        .returning('*');
      res.status(201).json(student);
    } catch (err) {
      console.error(err);
    }
  }
  async getStudents(req, res) {
    try {
      const students = await db('student').select()
      res.status(200).json(students);
    } catch (err) {
      console.error(err);
    }
  }
  async getStudent(req, res) {
    const params = req.params
    const id = parseInt(params.id);
    try {
      const students = await db('student').select().where('id', id)
      res.status(200).json(students);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new StudentController();
