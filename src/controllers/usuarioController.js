import Usuario from '../models/usuarioSchema.js';

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error });
  }
};

// Obtener todos los usuarios
export const obtenerUsuario = async (req, res) => {
  const id = req.params.id;
  try {
    const usuarios = await Usuario.findOne({ _id: id });
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el usuario ' + id, error });
  }
};

//  Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(infoFront(nuevoUsuario));
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear usuario', error });
  }
};


//  Actualizar usuario
export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);

    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      usuario._id,
      {
        "nombre": usuario.nombre,
        "correo": usuario.correo,
        "rol": usuario.rol
      },
      { new: true }
    );

    res.status(200).json(infoFront(usuarioActualizado));
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al actualizar usuario', error });
  }
};

export const infoFront = (usuario) => {
  return {
    "nombre": usuario.nombre,
    "correo": usuario.correo,
    "rol": usuario.rol,
    "token": usuario.token
  }
}