import express from 'express';
import { obtenerCarteleras, crearCartelera, obtenerCartelera, actualizarCartelera } from '../controllers/carteleraController.js';
import { verificarToken } from '../controllers/baseController.js';
import { cartelera } from './routes.js';

const routerCartelera = express.Router();

// Ruta para obtener todos los carteleras
routerCartelera.get(cartelera + 'list', obtenerCarteleras);

// Ruta para obtener cartelera por id
routerCartelera.get(cartelera + 'get/:id', obtenerCartelera);

// Ruta para crear un nuevo cartelera
routerCartelera.post(cartelera + 'crear', verificarToken, crearCartelera);

// Ruta para actualizar un nuevo cartelera
routerCartelera.post(cartelera + 'actualizar', verificarToken, actualizarCartelera);

export default routerCartelera;
