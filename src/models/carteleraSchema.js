import mongoose from 'mongoose';

// Esquema de  cartelera / funcion
const carteleraSchema = new mongoose.Schema({
    pelicula: { type: String, required: true },
    sala: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: false },
    proyecciones: [{ type: String, required: true }],
    horario: [{ type: String, required: true }]
}, { timestamps: true });


export const Cartelera = mongoose.model('Cartelera', carteleraSchema);
export default mongoose.model('Cartelera', carteleraSchema);