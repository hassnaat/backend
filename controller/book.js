const db = require("../db/db")

class BookController {
    async createBook(req, res) {
        const { title, author } = req.body
        try {
            const book = await db('book')
                .insert({
                    title,
                    author
                })
                .returning('*');
            res.status(201).json(book);
        } catch (err) {
            console.error(err);
        }
    }

    async getBooks(req, res) {
        try {
            const books = await db('book').join('borrowed', 'borrowed.book', 'book.id').select()
            res.status(200).json(books);
        } catch (err) {
            console.error(err);
        }
    }
    async getBook(req, res) {
        const params = req.params
        const id = parseInt(params.id);
        try {
            const book = await db('book').join('borrowed', 'borrowed.book', 'book.id').select().where('book.id', id)
            res.status(200).json(book);
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = new BookController();