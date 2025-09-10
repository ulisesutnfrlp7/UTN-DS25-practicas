// src/author.types.ts

import { Author } from '@prisma/client'

export interface CreateAuthorRequest {
  name: string;
}

export interface AuthorResponse {
  author?: Author;
  message: string;
}

export interface AuthorsListResponse {
  authors: Author[];
  total: number;
}