import express from 'express';
import { obtenerUsuarios, crearUsuario } from '../controllers/usuariocontroler.js';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', obtenerUsuarios);

// Ruta para crear un nuevo usuario
router.post('/', crearUsuario);

export default router;
