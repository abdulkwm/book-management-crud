package com.backend;

import com.backend.entity.Book;
import com.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookCrudBackendApplication implements CommandLineRunner {
	@Autowired
	private BookRepository bookRepository;

	public static void main(String[] args) {
		SpringApplication.run(BookCrudBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		sample data
		Book book = new Book();
		book.setBookTitle("Java");
		book.setBookPrice(54);
		bookRepository.save(book);
		Book book1 = new Book();
		book1.setBookTitle("HTML");
		book1.setBookPrice(78);
		bookRepository.save(book1);
		Book book2 = new Book();
		book1.setBookTitle("HTML");
		book1.setBookPrice(78);
		bookRepository.save(book2);
		Book book3 = new Book();
		book1.setBookTitle("HTML");
		book1.setBookPrice(78);
		bookRepository.save(book3);
		Book book4 = new Book();
		book1.setBookTitle("HTML");
		book1.setBookPrice(78);
		bookRepository.save(book4);
	}
}
