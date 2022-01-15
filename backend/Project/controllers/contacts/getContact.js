
const response = require('../../config/response.js')

const {
    getContact
} = require('../../models/db_contacts')


const getContacts = async (req, res) => {
    
    getContact().then((data)=>{
        console.log(data)
        res.status(200).send(
            new response(
                'ok',
                '200',
                'ConsultaExitosa',
                data
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al consultar los contactos'
            )
        )
    })
}

module.exports = {getContacts}