
class Errors {
    constructor({ code, message }) {
        this.code = code
        this.message = message
    }
}

function getBookByisbn({ isbn, books }) {
    try {
        const book = Object.fromEntries(Object.entries(books).filter(([isbnNumber, book]) => isbnNumber == isbn))
        if (Object.keys(book).length == 0) {
            throw new Errors({ code: 404, message: `Book with isbn ${isbn} does not exit` })
        }
        return book
    } catch (error) {
        throw error
    }

}
function getBookByauthor({ author, books }) {
    try {
        const book = Object.fromEntries(Object.entries(books).filter(([isbnNumber, book]) => book.author == author))
        if (Object.keys(book).length == 0) {
            throw new Errors({ code: 404, message: `Book with author ${author} does not exit` })
        }
        return book
    } catch (error) {
        throw error
    }

}
function getBookBytitle({ title, books }) {
    try {
        const book = Object.fromEntries(Object.entries(books).filter(([isbnNumber, book]) => book.title == title))
        if (Object.keys(book).length == 0) {
            throw new Errors({ code: 404, message: `Book with title ${title} does not exit` })
        }
        return book
    } catch (error) {
        throw error
    }

}

module.exports = { getBookByisbn, getBookByauthor, getBookBytitle }