import React from 'react'
import { useState, useEffect } from "react";
import BookService from '../service/BookService';
const ViewBookComponent = () => {
    const [book, setBook] = useState({});
    useEffect(() => {
        bookDetail(book.bookId);
    }, []);
    const bookDetail = (bookId) => {
        BookService.getBookbyId(bookId).then((response) => {
            setBook(response.data)
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        });
    }
  return (
    <div>
        <div>
            <br></br>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View Book Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>Book ID</label>
                        <div>{book.id}</div>
                    </div>
                    <div className='row'>
                        <label>Book title</label>
                        <div>{book.bookTitle}</div>
                    </div>
                    <div className='row'>
                        <label>Book price</label>
                        <div>{book.bookPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBookComponent