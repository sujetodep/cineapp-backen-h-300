import Usuario from '../models/usuarioSchema.js';
import { desencriptar } from "../utils/secure.js";
import { generarToken } from './baseController.js';
import { infoFront } from './usuarioController.js';

//  Crear un nuevo usuario
export const login = async (req, res) => {
    try {
        const correo = req.body.correo;
        const contrasenia = req.body.contrasenia;

        // Buscar el usuario por filtro de correo
        const usuario = await Usuario.findOne({ correo: correo });

        // Desencripcion de la contraseña
        if (contrasenia === desencriptar(usuario?.contrasenia)) {
            // Generacion y actualizacion del token de sesion en la tabla de usuarios
            const tokenUsuario = await actualizarTokenUsuario(usuario);
            res.status(200).json(
                infoFront(tokenUsuario)
            );
        } else {
            res.status(403).json({ mensaje: 'Usuario o contraseña inválido' });
        }
    } catch (error) {
        console.error(error);
        res.status(403).json({ mensaje: 'Error al iniciar sesión', error });
    }
};

//  Cambiar contraseña usuario
export const contrasenia = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            usuario._id,
            {
                "contrasenia": usuario.contrasenia
            },
            { new: false }
        );
        res.status(200).json(infoFront(usuarioActualizado));
    } catch (error) {
        console.error(error);
        res.status(400).json({ mensaje: 'Error al cambiar la contrasenia', error });
    }
};


//  Cambiar token usuario
export const checkToken = async (req, res) => {
    res.status(200).json(
        { mensaje: 'Token válido' }
    );
};


//  Cambiar token usuario
async function actualizarTokenUsuario(body) {
    try {
        const usuario = new Usuario(body);

        // Generar token
        const nuevoToken = generarToken(
            {
                correo: usuario.correo,
                contrasenia: usuario.contrasenia,
                rol: usuario.rol
            }
            , "1h");

        // Actualizar token en la tabla de usuario
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            usuario._id,
            {
                "token": nuevoToken
            },
            { new: false }
        );
        return await Usuario.findOne({ _id: usuarioActualizado._id });
    } catch (error) {
        console.error(error);
        throw error;
    }
};