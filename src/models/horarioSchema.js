import mongoose from 'mongoose';

// Esquema de  horario / funcion
const horarioSchema = new mongoose.Schema({
    pelicula: { type: peliculaSchema, required: true },
    sala: { type: salaSchema, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: false },
    proyecciones: [{ type: String, required: true }],
    horario: [{ type: Date, required: true }]
}, { timestamps: true });


export const Horario = mongoose.model('Horario', horarioSchema);
export default mongoose.model('Horario', horarioSchema);