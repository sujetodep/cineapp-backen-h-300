import Sala from '../models/salaSchema.js';

// Obtener todos los salas
export const obtenerSalas = async (req, res) => {
  try {
    const salas = await Sala.find();
    res.status(200).json(salas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener salas', error });
  }
};

// Obtener todos los salas
export const obtenerSala = async (req, res) => {
  const id = req.params.id;
  try {
    const salas = await Sala.findOne({ _id: id });
    res.status(200).json(salas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el sala ' + id, error });
  }
};

//  Crear un nuevo sala
export const crearSala = async (req, res) => {
  try {
    const nuevoSala = new Sala(req.body);
    await nuevoSala.save();
    res.status(201).json(infoFrontSala(nuevoSala));
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear sala', error });
  }
};

//  Actualizar sala
export const actualizarSala = async (req, res) => {
  try {
    const sala = new Sala(req.body);

    const salaActualizado = await Sala.findByIdAndUpdate(
      sala._id,
      {
        "nombre": sala.nombre,
        "descripcion": sala.descripcion
      },
      { new: true }
    );

    res.status(200).json(infoFrontSala(salaActualizado));
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al actualizar sala', error });
  }
};

export const infoFrontSala = (sala) => {
  return {
    "_id": sala._id,
    "nombre": sala.nombre,
    "descripcion": sala.descripcion
  }
}