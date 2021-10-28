/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    createUser
} = require('../../models/db_user')


const createNewUser = async (req, res) => {

    createUser(req.body).then((id)=>{
        console.log('id', id)
        res.status(200).send(
            new response(
                'ok',
                '200',
                'usuario creado correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al eliminar el usuario'
            )
        )
    })
}

module.exports = {createNewUser}