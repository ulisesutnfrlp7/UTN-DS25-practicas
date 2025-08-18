// src/types/book.types.ts

import { Book } from '@prisma/client'

export interface CreateBookRequest {
    title_and_author: string
    description: string;
    image: string
}

export interface UpdateBookRequest {
    title_and_author?: string
    description?: string;
    image?: string;
}

export interface BookResponse {
    book?: Book;
    message: string;
}

export interface BooksListResponse {
    books: Book[];
    total: number;
}