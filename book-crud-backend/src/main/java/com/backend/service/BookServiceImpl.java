package com.backend.service;

import com.backend.entity.Book;
import com.backend.exception.ResourceNotFoundException;
import com.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    private BookRepository bookRepository;
    @Override
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(long id) {
        return bookRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Book With The Id " + id + " is Not Found!"));
    }

    @Override
    public Book updateBook(long id, Book bookDetails) {
        Book book = bookRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Book With The Id " + id + " is Not Found!"));
        book.setBookTitle(bookDetails.getBookTitle());
        book.setBookPrice(bookDetails.getBookPrice());
        return bookRepository.save(book);
    }

    @Override
    public Book deleteBook(long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Book With The Id " + id + " is Not Found!"));
        bookRepository.delete(book);
        return book;
    }
}
