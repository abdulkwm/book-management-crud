package com.backend.controller;

import com.backend.entity.Book;
import com.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin("*")
public class BookController {
    @Autowired
    private BookService bookService;

    //add book
    @PostMapping
    public Book addBook(@RequestBody Book book){
        Book createdBook = bookService.addBook(book);
        return createdBook;
    }
    //get All books
    @GetMapping
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    //get Book By id
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable long id){
        Book book = bookService.getBookById(id);
        return ResponseEntity.ok(book);
    }
    //update Book By id
    @PutMapping("/{id}")
    public ResponseEntity<String> updateBook(@PathVariable long id, @RequestBody Book bookDetails){
        Book updatedBook = bookService.updateBook(id, bookDetails);
        String msg = "Book With The Id " + id + " Is Updated!";
        return ResponseEntity.ok(msg);
    }
    //delete Book By Id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable long id){
        Book book = bookService.deleteBook(id);
        String msg = "Book With The Id " + id + " Is Deleted!";
        return ResponseEntity.ok(msg);
    }
}
