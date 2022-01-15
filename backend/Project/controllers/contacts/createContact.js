/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    createContact
} = require('../../models/db_contacts.js')


const createNewContact = async (req, res) => {

    createContact(req.body).then((id)=>{
        console.log('id', id)
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Contacto creada correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al crear la Contacto'
            )
        )
    })
}

module.exports = {createNewContact}