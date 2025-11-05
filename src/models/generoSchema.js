import mongoose from 'mongoose';

//Esquema de genero //
const generoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  codigo: {
    type: String, unique: true,
    enum: [
      'accion',
      'drama',
      'terror',
      'suspenso',
      'ficcion',
      'comedia',
      'romance'
    ], default: 'accion'
  }
}, { timestamps: true });

export const Genero = mongoose.model('Genero', generoSchema);
export default mongoose.model('Genero', generoSchema);