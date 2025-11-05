import mongoose from 'mongoose';

// Esquema de pelicula //
const salaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
});

export const Sala = mongoose.model('Sala', salaSchema);
export default mongoose.model('Sala', salaSchema);
