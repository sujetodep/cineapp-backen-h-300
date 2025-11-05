import express from 'express';
import { obtenerSalas, crearSala, obtenerSala, actualizarSala } from '../controllers/salaController.js';
import { verificarToken } from '../controllers/baseController.js';
import { sala } from './routes.js';

const routerSala = express.Router();

// Ruta para obtener todos los salas
routerSala.get(sala + 'list', obtenerSalas);

// Ruta para obtener sala por id
routerSala.get(sala + 'get/:id', obtenerSala);

// Ruta para crear un nuevo sala
routerSala.post(sala + 'crear', verificarToken, crearSala);

// Ruta para actualizar un nuevo sala
routerSala.post(sala + 'actualizar', verificarToken, actualizarSala);

export default routerSala;
