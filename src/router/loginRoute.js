import express from 'express';
import { checkToken, contrasenia, login } from '../controllers/loginController.js';
import { auth } from './routes.js';
import { verificarToken } from '../controllers/baseController.js';

const routerAuth = express.Router();

// Ruta para login
routerAuth.post(auth + 'login', login);

// Ruta para validar el token de sesión
routerAuth.get(auth + 'check/token', verificarToken, checkToken);

// Ruta para el cambio de contraseña
routerAuth.post(auth + 'password', contrasenia);

export default routerAuth;
