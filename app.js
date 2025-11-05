import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './src/confi/database.js';
import { base } from './src/router/routes.js';
import routerAuth from './src/router/loginRoute.js';
import routerUsuario from './src/router/usuarioRoute.js';
import routerGenero from './src/router/generoRoute.js';


dotenv.config();
const app = express();

//  Middlewares

app.use(cors());
app.use(express.json());

//  Conexión a la base de datos
connectDB();

//  Rutas
app.use(base, routerUsuario);
app.use(base, routerAuth);
app.use(base, routerGenero);

//  Ruta base
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ');
});

//  Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
