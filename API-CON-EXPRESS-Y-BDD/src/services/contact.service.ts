// src/services/contact.service.ts

import { ContactMessage, ContactMessageRequest } from '../types/contact.types';
import { createContactMessage } from '../models/contact.model';

export async function sendMessage(data: ContactMessageRequest): Promise<ContactMessage> {
  return await createContactMessage(data);
}