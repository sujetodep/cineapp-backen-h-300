import Cartelera from '../models/carteleraSchema.js';

// Obtener todos los carteleras
export const obtenerCarteleras = async (req, res) => {
  try {
    const carteleras = await Cartelera.find();
    res.status(200).json(carteleras);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener carteleras', error });
  }
};

// Obtener todos los carteleras
export const obtenerCartelera = async (req, res) => {
  const id = req.params.id;
  try {
    const carteleras = await Cartelera.findOne({ _id: id });
    res.status(200).json(carteleras);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el cartelera ' + id, error });
  }
};

//  Crear un nuevo cartelera
export const crearCartelera = async (req, res) => {
  try {
    const nuevoCartelera = new Cartelera(req.body);
    await nuevoCartelera.save();
    res.status(201).json(infoFrontCartelera(nuevoCartelera));
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear cartelera', error });
  }
};

//  Actualizar cartelera
export const actualizarCartelera = async (req, res) => {
  try {
    const cartelera = new Cartelera(req.body);

    const carteleraActualizado = await Cartelera.findByIdAndUpdate(
      cartelera._id,
      {
        "pelicula": cartelera.pelicula,
        "sala": cartelera.sala,
        "fechaInicio": cartelera.fechaInicio,
        "fechaFin": cartelera.fechaFin,
        "proyecciones": cartelera.proyecciones,
        "horario": cartelera.horario
      },
      { new: true }
    );

    res.status(200).json(infoFrontCartelera(carteleraActualizado));
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al actualizar cartelera', error });
  }
};

export const infoFrontCartelera = (cartelera) => {
  return {
    "_id": cartelera._id,
    "pelicula": cartelera.pelicula,
    "sala": cartelera.sala,
    "fechaInicio": cartelera.fechaInicio,
    "fechaFin": cartelera.fechaFin,
    "proyecciones": cartelera.proyecciones,
    "horario": cartelera.horario
  }
}