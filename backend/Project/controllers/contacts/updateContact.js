/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    updateContacts
} = require('../../models/db_contacts')


const putContact = async (req, res) => {
    updateContacts(req.query['id'], req.body).then(()=>{
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Contacto actualizado correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al actualizar el Contacto'
            )
        )
    })
}

module.exports = {putContact}