// src/types/book.types.ts

import { Author, Book, Category } from '@prisma/client'

export interface CreateBookRequest {
  title: string;
  description: string;
  image: string;
  categoria: Category;
  authorId: number;
}

export interface UpdateBookRequest {
  title?: string;
  description?: string;
  image?: string;
  categoria?: Category;
  authorId?: number;
}

export type BookWithAuthor = Book & { author: Author };

export interface BookResponse {
  book?: BookWithAuthor;
  message: string;
}

export interface BooksListResponse {
  books: BookWithAuthor[];
  total: number;
}