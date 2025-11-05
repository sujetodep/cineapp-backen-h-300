import mongoose from 'mongoose';

const peliculaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String },
    portada: { type: String, required: true },
    genero: { type: String, required: true }
}, { timestamps: true });

export const Pelicula = mongoose.model('Pelicula', peliculaSchema);
export default mongoose.model('Pelicula', peliculaSchema);