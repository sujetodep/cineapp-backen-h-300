import jwt from 'jsonwebtoken';
import { Usuario } from '../models/usuarioSchema.js';

/**
 * Genera un token JWT reusable.
 * @param {Object} payload - Datos del usuario (id, rol, etc.)
 * @param {String} [expiresIn='2h'] - Tiempo de expiración (ej: '2h', '7d')
 * @returns {String} token JWT
 */
export function generarToken(payload, expiresIn = '2h') {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

export const verificarToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // formato "Bearer token"
    if (!token) return res.status(401).json({ mensaje: 'Token no proporcionado' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;

        const usuarioToken = await Usuario.findOne(
            {
                correo: decoded.correo,
                contrasenia: decoded.contrasenia,
                token: token
            }
        );

        if (usuarioToken === null || !usuarioToken.nombre) {
            res.status(403).json({ mensaje: 'Token inválido o expirado' });
        } else {
            next();
        }
    } catch (error) {
        res.status(403).json({ mensaje: 'Token inválido o expirado' });
    }
};