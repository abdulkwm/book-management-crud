import axios from "axios";
const BOOK_BASE_URL = 'http://localhost:8080/api/books';
class BookService {
    getAllBooks(){
        return axios.get(BOOK_BASE_URL);
    }
    createBook(book){
        return axios.post(BOOK_BASE_URL, book);
    }
    getBookbyId(bookId){
        return axios.get(BOOK_BASE_URL + "/" + bookId);
    }
    updateBook(bookId, book){
        return axios.put(BOOK_BASE_URL + "/" + bookId, book);
    }
    deleteBook(bookId){
        return axios.delete(BOOK_BASE_URL + "/" + bookId);
    }
}
export default new BookService();