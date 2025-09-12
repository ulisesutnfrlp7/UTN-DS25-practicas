// src/api/api.js

const BASE_URL = import.meta.env.VITE_API_URL;

console.log("🌐 BASE_URL:", BASE_URL);

// Autores
export async function getAuthors() {
  const res = await fetch(`${BASE_URL}/authors`);
  if (!res.ok) throw new Error('Error obteniendo autores');
  return res.json();
}

export async function createAuthor(name) {
  const res = await fetch(`${BASE_URL}/authors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error('Error creando autor');
  return res.json();
}

// Libros
export async function getBooks() {
  const res = await fetch(`${BASE_URL}/books`);
  if (!res.ok) throw new Error('Error al obtener libros');
  return res.json();
}

export async function getBooksByCategory(categoria) {
  const res = await fetch(`${BASE_URL}/books/by-category?categoria=${categoria}`);
  if (!res.ok) throw new Error('Error al obtener libros por categoría');
  return res.json();
}

export async function createBook(bookData) {
  const res = await fetch(`${BASE_URL}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookData)
  });
  if (!res.ok) throw new Error('Error al crear libro');
  return res.json();
}

export async function deleteBook(id) {
  const res = await fetch(`${BASE_URL}/books/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Error al eliminar libro');
  return res.json();
}

export async function updateBook(bookData) {
  const res = await fetch(`${BASE_URL}/books/${bookData.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookData)
  });
  if (!res.ok) throw new Error('Error al actualizar libro');
  return res.json();
}

// Usuarios
export async function createUser(userData, token) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(userData)
  });
  if (!res.ok) throw new Error('Error al registrar usuario');
  return res.json();
}

// Contacto
export async function sendMessage(messageData) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(messageData)
  });
  if (!res.ok) throw new Error('Error al enviar mensaje');
  return res.json();
}