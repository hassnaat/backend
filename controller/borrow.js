const db = require("../db/db")

class BorrowController {
    async borrowBook(req, res) {
        const { book, borrowed_by, return_date } = req.body
        try {
            const borrowed = await db('borrowed')
                .insert({
                    book,
                    borrowed_by,
                    return_date

                })
                .returning('*');
            res.status(201).json(borrowed);
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = new BorrowController();