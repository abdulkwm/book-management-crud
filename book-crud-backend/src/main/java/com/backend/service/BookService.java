package com.backend.service;

import com.backend.entity.Book;

import java.util.List;

public interface BookService {
    Book addBook(Book book);
    List<Book> getAllBooks();
    Book getBookById(long id);
    Book updateBook(long id, Book bookDetails);
    Book deleteBook(long id);
}
