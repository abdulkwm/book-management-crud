import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import BookService from '../service/BookService';

const ListBookComponent = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getAllBooks();
    }, []);
    const getAllBooks = () => {
        BookService.getAllBooks().then((response) => {
            setBooks(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err);
        });
    }
    const deleteBook = (bookId) => {
        BookService.deleteBook(bookId).then((response) => {
            getAllBooks();
        }).catch((err) => {
            console.log(err);
        });
    }
   
  return (
    <div className='container'>
        <br></br>
        <h2 className='text-center'>List Of Books</h2>
        <div>
            <Link
            to={"/add-book"}
            className="btn btn-primary mb-2"
            style={{marginLeft: '10px'}}
            >
            Add Book
            </Link>
        </div>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Book Id</th>
                    <th>Book Title</th>
                    <th>Book Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {books.map((book)=> (
                   <tr key={book.id}>
                       <td>{book.id}</td>
                       <td>{book.bookTitle}</td>
                       <td>{book.bookPrice}</td>
                       <td>
                           <Link className='btn btn-info' to={`/edit-book/${book.id}`}>Update</Link>
                           <button
                           className='btn btn-danger'
                           onClick={()=> deleteBook(book.id)}
                           >
                               Delete
                           </button>
                       </td>
                   </tr>
               ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListBookComponent