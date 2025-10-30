import mongoose from 'mongoose';

// esquema de  usuario
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'usuario'], default: 'usuario' }
}, { timestamps: true });


//Esquema de genero //


const generoSchema = new mongoose.Schema({

});

// Esquema de pelicula //
const salaSchema = new mongoose.Schema({
});

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  genero: { type: String, enum: ['accion', 'drama', 'terror', 'comedia', 'romance'], default: 'accion' }
}, { timestamps: true });


// Esquema de  horario / funcion
const horarioSchema = new mongoose.Schema({
  pelicula: { type: peliculaSchema, required: true },
  sala: { type: salaSchema, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: false },
  proyecciones: [{ type: String, required: true }],
horario: [{ type: Date, required: true }]
}, { timestamps: true });

// Exportar modelos
// =======================
export const Usuario = mongoose.model('Usuario', usuarioSchema);
export const Genero = mongoose.model('Genero', generoSchema);
export const Pelicula = mongoose.model('Pelicula', peliculaSchema);
export const Sala = mongoose.model('Sala', salaSchema);
export const Horario = mongoose.model('Horario', horarioSchema);
export default mongoose.model('Usuario', usuarioSchema);
