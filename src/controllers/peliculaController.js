import Pelicula from '../models/peliculaSchema.js';

// Obtener todos los peliculas
export const obtenerPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.status(200).json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener peliculas', error });
  }
};

// Obtener todos los peliculas
export const obtenerPelicula = async (req, res) => {
  const id = req.params.id;
  try {
    const peliculas = await Pelicula.findOne({ _id: id });
    res.status(200).json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el pelicula ' + id, error });
  }
};

//  Crear un nuevo pelicula
export const crearPelicula = async (req, res) => {
  try {
    const nuevoPelicula = new Pelicula(req.body);
    await nuevoPelicula.save();
    res.status(201).json(infoFrontPelicula(nuevoPelicula));
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear pelicula', error });
  }
};

//  Actualizar pelicula
export const actualizarPelicula = async (req, res) => {
  try {
    const pelicula = new Pelicula(req.body);

    const peliculaActualizado = await Pelicula.findByIdAndUpdate(
      pelicula._id,
      {
        "titulo": pelicula.titulo,
        "descripcion": pelicula.descripcion,
        "portada": pelicula.portada,
        "genero": pelicula.genero
      },
      { new: true }
    );

    res.status(200).json(infoFrontPelicula(peliculaActualizado));
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al actualizar pelicula', error });
  }
};

export const infoFrontPelicula = (pelicula) => {
  return {
    "_id": pelicula._id,
    "titulo": pelicula.titulo,
    "descripcion": pelicula.descripcion,
    "portada": pelicula.portada,
    "genero": pelicula.genero
  }
}