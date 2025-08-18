import { User, CreateUserRequest } from '../types/user.types';
import { createUserDB, getAllUsersDB } from '../models/user.model';

export async function createUser(data: CreateUserRequest): Promise<User> {
  return await createUserDB(data);
}

export async function getAllUsers(): Promise<User[]> {
  return await getAllUsersDB();
}