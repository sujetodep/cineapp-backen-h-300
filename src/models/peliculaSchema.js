import mongoose from 'mongoose';
import generoSchema from './generoSchema.js';

const peliculaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String },
    portada: { type: String, required: true },
    genero: { type: generoSchema, required: true }
}, { timestamps: true });

export const Pelicula = mongoose.model('Pelicula', peliculaSchema);
export default mongoose.model('Pelicula', peliculaSchema);