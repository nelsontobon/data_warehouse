/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    searchContact
} = require('../../models/db_contacts.js')


const searchContacts = async (req, res) => {
    let {data} = req.query
    searchContact(data).then((data)=>{
        res.status(200).send(
            new response(
                'ok',
                '200',
                'busqueda completada',
                data
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al hacer la busqueda'
            )
        )
    })
}

module.exports = {searchContacts}