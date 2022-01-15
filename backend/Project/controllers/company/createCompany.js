/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    createCompany
} = require('../../models/db_companies.js')


const createNewCompany = async (req, res) => {

    createCompany(req.body).then((id)=>{
        console.log('id', id)
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Compañia creada correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al crear la compañia'
            )
        )
    })
}

module.exports = {createNewCompany}