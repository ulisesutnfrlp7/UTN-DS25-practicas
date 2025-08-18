// src/controllers/book.controller.ts

import { Request, Response, NextFunction } from 'express';
import { CreateBookRequest, UpdateBookRequest, BookResponse, BooksListResponse } from '../types/book.types';
import * as bookService from '../services/book.service';

export async function getAllBooks(
  req: Request,
  res: Response<BooksListResponse>,
  next: NextFunction
) {
  try {
    const books = await bookService.getAllBooks();
    res.json({
      books,
      total: books.length
    });
  } catch (error) {
    next(error);
  }
}

export async function getBookById(
  req: Request<{ id: string }>,
  res: Response<BookResponse>,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid book ID' });
    }

    const book = await bookService.getBookById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({
      book,
      message: 'Book retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
}

export async function createBook(
  req: Request<{}, BookResponse, CreateBookRequest>,
  res: Response<BookResponse>,
  next: NextFunction
) {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json({
      book: newBook,
      message: 'Book created successfully'
    });
  } catch (error) {
    next(error);
  }
}

export async function updateBook(
  req: Request<{ id: string }, BookResponse, UpdateBookRequest>,
  res: Response<BookResponse>,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid book ID' });
    }

    const updatedBook = await bookService.updateBook(id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found or not updated' });
    }

    res.json({
      book: updatedBook,
      message: 'Book updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteBook(
  req: Request<{ id: string }>,
  res: Response<{ message: string }>,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid book ID' });
    }

    const deleted = await bookService.deleteBook(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Book not found or already deleted' });
    }

    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    next(error);
  }
}