import Genero from '../models/generoSchema.js';

// Obtener todos los generos
export const obtenerGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.status(200).json(generos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener generos', error });
  }
};

// Obtener todos los generos
export const obtenerGenero = async (req, res) => {
  const id = req.params.id;
  try {
    const generos = await Genero.findOne({ _id: id });
    res.status(200).json(generos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el genero ' + id, error });
  }
};

//  Crear un nuevo genero
export const crearGenero = async (req, res) => {
  try {
    const nuevoGenero = new Genero(req.body);
    await nuevoGenero.save();
    res.status(201).json(nuevoGenero);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear genero', error });
  }
};


//  Actualizar genero
export const actualizarGenero = async (req, res) => {
  try {
    const genero = new Genero(req.body);

    const generoActualizado = await Genero.findByIdAndUpdate(
      genero._id,
      {
        "nombre": genero.nombre,
        "correo": genero.correo,
        "rol": genero.rol
      },
      { new: true }
    );

    res.status(200).json(generoActualizado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al actualizar genero', error });
  }
};