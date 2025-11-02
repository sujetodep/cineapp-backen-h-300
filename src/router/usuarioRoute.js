import express from 'express';
import { obtenerUsuarios, crearUsuario, obtenerUsuario, actualizarUsuario } from '../controllers/usuarioController.js';
import { verificarToken } from '../controllers/baseController.js';
import { usuario } from './routes.js';

const routerUsuario = express.Router();

// Ruta para obtener todos los usuarios
routerUsuario.get(usuario + 'list', verificarToken, obtenerUsuarios);

// Ruta para obtener usuario por id
routerUsuario.get(usuario + 'get/:id', verificarToken, obtenerUsuario);

// Ruta para crear un nuevo usuario
routerUsuario.post(usuario + 'crear', crearUsuario);

// Ruta para actualizar un nuevo usuario
routerUsuario.post(usuario + 'actualizar', verificarToken, actualizarUsuario);

export default routerUsuario;
