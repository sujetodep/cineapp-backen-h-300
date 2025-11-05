import express from 'express';
import { obtenerPeliculas, crearPelicula, obtenerPelicula, actualizarPelicula } from '../controllers/peliculaController.js';
import { verificarToken } from '../controllers/baseController.js';
import { pelicula } from './routes.js';

const routerPelicula = express.Router();

// Ruta para obtener todos los peliculas
routerPelicula.get(pelicula + 'list', obtenerPeliculas);

// Ruta para obtener pelicula por id
routerPelicula.get(pelicula + 'get/:id', obtenerPelicula);

// Ruta para crear un nuevo pelicula
routerPelicula.post(pelicula + 'crear', verificarToken, crearPelicula);

// Ruta para actualizar un nuevo pelicula
routerPelicula.post(pelicula + 'actualizar', verificarToken, actualizarPelicula);

export default routerPelicula;
