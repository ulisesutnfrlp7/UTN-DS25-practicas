// src/types/book.types.ts

import { Book, Category } from '@prisma/client'

export interface CreateBookRequest {
    title_and_author: string
    description: string;
    image: string;
    categoria: Category
}

export interface UpdateBookRequest {
    title_and_author?: string
    description?: string;
    image?: string;
    categoria?: Category
}

export interface BookResponse {
    book?: Book;
    message: string;
}

export interface BooksListResponse {
    books: Book[];
    total: number;
}