import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types/auth.types';

export function generateToken(payload: JwtPayload): string {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN || '2h';

  if (!secret) throw new Error('JWT_SECRET no definido');

  return jwt.sign(payload, secret, {
    expiresIn: expiresIn as jwt.SignOptions['expiresIn']
  });
}