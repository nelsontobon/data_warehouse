/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    deleteContact
} = require('../../models/db_contacts')


const delContact = async (req, res) => {

    deleteContact(req.query['id']).then(()=>{
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Contacto eliminada correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al eliminar la Contacto'
            )
        )
    })
}

module.exports = {delContact}