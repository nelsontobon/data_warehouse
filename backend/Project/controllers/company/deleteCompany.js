/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    deleteCompany
} = require('../../models/db_companies')


const delCompany = async (req, res) => {

    deleteCompany(req.body['name']).then((id)=>{
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Compañia eliminada correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al eliminar la Compañia'
            )
        )
    })
}

module.exports = {delCompany}