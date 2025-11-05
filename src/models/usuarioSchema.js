import mongoose from 'mongoose';

// esquema de  usuario
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contrasenia: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'usuario'], default: 'usuario' },
  token: { type: String }
}, { timestamps: true });

// Exportar modelos
// =======================
export const Usuario = mongoose.model('Usuario', usuarioSchema);
export default mongoose.model('Usuario', usuarioSchema);
