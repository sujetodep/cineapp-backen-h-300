import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './confi/database.js';
import router from './Router/usurioroute.js';


dotenv.config();
const app = express();

//  Middlewares

app.use(cors());
app.use(express.json());

//  Conexión a la base de datos
connectDB();

//  Rutas
app.use('/api/usuarios',router);

//  Ruta base
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ');
});

//  Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
