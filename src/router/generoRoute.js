import express from 'express';
import { obtenerGeneros, crearGenero, obtenerGenero, actualizarGenero } from '../controllers/generoController.js';
import { verificarToken } from '../controllers/baseController.js';
import { genero } from './routes.js';

const routerGenero = express.Router();

// Ruta para obtener todos los generos
routerGenero.get(genero + 'list', obtenerGeneros);

// Ruta para obtener genero por id
routerGenero.get(genero + 'get/:id', obtenerGenero);

// Ruta para crear un nuevo genero
routerGenero.post(genero + 'crear', verificarToken, crearGenero);

// Ruta para actualizar un nuevo genero
routerGenero.post(genero + 'actualizar', verificarToken, actualizarGenero);

export default routerGenero;
