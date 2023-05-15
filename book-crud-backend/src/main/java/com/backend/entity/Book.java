package com.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Table(name = "book")
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String bookTitle;
    private double bookPrice;

    public Book(String bookTitle, double bookPrice) {
        this.bookTitle = bookTitle;
        this.bookPrice = bookPrice;
    }
}
