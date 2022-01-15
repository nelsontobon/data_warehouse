/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    updateCompany
} = require('../../models/db_companies')


const putCompany = async (req, res) => {
    console.log(req.query['id'], req.body)
    updateCompany(req.query['id'], req.body).then(()=>{
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Compañia actualizada correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al actualizar la compañia'
            )
        )
    })
}

module.exports = {putCompany}