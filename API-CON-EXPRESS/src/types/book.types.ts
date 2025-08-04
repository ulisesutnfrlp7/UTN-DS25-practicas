// src/types/book.types.ts

export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    createdAt?: Date;
}

export interface CreateBookRequest {
    title: string;
    author: string;
    description: string;
}

export interface UpdateBookRequest {
    title?: string;
    author?: string;
    description?: string;
}

export interface BookResponse {
    book?: Book;
    message: string;
}

export interface BooksListResponse {
    books: Book[];
    total: number;
}