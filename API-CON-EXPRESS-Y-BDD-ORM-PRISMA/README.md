# API-CON-EXPRESS PARA LIBRERÍA YENNY 📚

Esta parte del proyecto implementa el backend de la librería digital Yenny, utilizando **Express.js**, **Prisma ORM** y **Supabase** como host de base de datos PostgreSQL. La API permite gestionar libros, autores, usuarios registrados y mensajes de contacto.

---

## ⚙️ TECNOLOGÍAS UTILIZADAS

- **Node.js + Express** → servidor HTTP y enrutamiento modular
- **Prisma ORM** → acceso tipado a PostgreSQL
- **Supabase** → hosting de la base de datos
- **dotenv** → configuración de entorno
- **CORS** → control de origen para frontend externo
- **Middlewares personalizados** → logging y manejo de errores

---

## 📁 ESTRUCTURA DEL PROYECTO

```
📂 src/
├── app.ts                  # Entrada principal del servidor Express
├── routes/                 # Rutas agrupadas por entidad
│   ├── book.routes.ts
│   ├── author.routes.ts
│   ├── user.routes.ts
│   └── contact.routes.ts
├── controllers/           # Lógica de cada endpoint (separación por entidad)
│   ├── book.controller.ts
│   ├── author.controller.ts
│   ├── user.controller.ts
│   └── contact.controller.ts
├── services/              # Acceso a base de datos y lógica de negocio
│   ├── book.service.ts
│   ├── author.service.ts
│   ├── user.service.ts
│   └── contact.service.ts
├── middlewares/           # Funciones intermedias para logging, errores, y validaciones con ZOD.
│   ├── logger.middleware.ts
│   ├── validation.middleware.ts
│   └── error.middleware.ts
├── validations/           # Validaciones de entrada (con ZOD para libros)
│   ├── book.validation.ts
├── types/                 # Tipos y interfaces TypeScript compartidos
|   ├── author.types.ts
│   ├── book.types.ts
│   ├── user.types.ts
│   └── contact.types.ts
```

---

## 🔐 VARIABLES DE ENTORNO

Uso de un archivo `.env.example` en la raíz del proyecto:

```env
DATABASE_URL=postgresql://usuario:clave@host:puerto/db
FRONTEND_URL=http://localhost:5173
PORT=3000
```

---

## 🚀 ENDPOINTS DISPONIBLES

| MÉTODO | RUTA                  | DESCRIPCIÓN                            |
|--------|------------------------|----------------------------------------|
| GET    | `/api/books`          | Obtener todos los libros               |
| POST   | `/api/books`          | Crear un nuevo libro                   |
| PUT    | `/api/books/:id`      | Actualizar un libro existente          |
| DELETE | `/api/books/:id`      | Eliminar un libro                      |
| GET    | `/api/authors`        | Obtener todos los autores              |
| POST   | `/api/authors`        | Crear un nuevo autor                   |
| POST   | `/api/users`          | Registrar un nuevo usuario             |
| POST   | `/api/contact`        | Enviar mensaje de contacto             |

---

## 🧠 FUNCIONALIDADES DESTACADAS

- **Middleware de logging**: registra cada request con método, ruta y timestamp.
- **Manejo centralizado de errores**: responde con estructura uniforme ante fallos.
- **CORS dinámico**: permite conexión segura con el frontend React.
- **Integración con Supabase**: base de datos PostgreSQL con hosting gratuito y escalable.

---

## 🏁 ESTADO FINAL

Proyecto backend completado y funcional. Conectado al frontend React mediante rutas RESTful. Todos los endpoints fueron probados y documentados.