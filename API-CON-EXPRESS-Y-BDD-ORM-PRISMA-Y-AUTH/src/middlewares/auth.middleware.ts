// src/middlewares/auth.middleware.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// 🔧 Extensión del tipo Request para incluir datos del usuario
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        role: 'USER' | 'ADMIN';
      };
    }
  }
}

// 🔐 Autenticación: Verifica el token JWT y adjunta el usuario al request
export function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    console.log("🔍 Decoded JWT:", decoded);

    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role
    };

    next();
  } catch (error: any) {
    console.error(error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, error: 'Token expirado' });
    }
    res.status(401).json({ success: false, error: 'Token inválido' });
  }
}

// 🛡️ Autorización: Verifica si el usuario tiene uno de los roles permitidos
export function authorize(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'No autenticado'
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: 'No tienes permisos para esta acción'
      });
    }

    next();
  };
}