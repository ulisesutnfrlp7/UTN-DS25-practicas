// src/controllers/book.controller.ts

import { Request, Response, NextFunction } from 'express';
import { CreateAuthorRequest, AuthorResponse, AuthorsListResponse } from '../types/author.types';
import * as authorService from '../services/author.service';

export async function getAllAuthors(
  req: Request,
  res: Response<AuthorsListResponse>,
  next: NextFunction
) {
  try {
    const authors = await authorService.getAllAuthors();
    res.json({
      authors,
      total: authors.length
    });
  } catch (error) {
    next(error);
  }
}

export async function createAuthor(
  req: Request<{}, AuthorResponse, CreateAuthorRequest>,
  res: Response<AuthorResponse>,
  next: NextFunction
) {
  try {
    const newAuthor = await authorService.createAuthor(req.body);
    res.status(201).json({
      author: newAuthor,
      message: 'Author created successfully'
    });
  } catch (error) {
    next(error);
  }
}