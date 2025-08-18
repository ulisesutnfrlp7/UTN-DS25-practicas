import pool from '../config/db';
import { ContactMessage, ContactMessageRequest } from '../types/contact.types';

// Crear un nuevo mensaje de contacto
export async function createContactMessage(data: ContactMessageRequest): Promise<ContactMessage> {
  const result = await pool.query(
    `INSERT INTO contact_messages (nombre, apellido, email, mensaje) VALUES ($1, $2, $3, $4) 
    RETURNING id, nombre, apellido, email, mensaje, enviado_en`,
    [data.nombre, data.apellido, data.email, data.mensaje]
  );

  const row = result.rows[0];

  return {
    id: row.id,
    nombre: row.nombre,
    apellido: row.apellido,
    email: row.email,
    mensaje: row.mensaje,
    enviadoEn: row.enviado_en,
  };
}