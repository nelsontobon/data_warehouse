/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    deleteRegion
} = require('../../models/db_region')


const delRegion = async (req, res) => {

    deleteRegion(req.body['region']).then((id)=>{
        console.log('id', id)
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Region eliminada correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al eliminar la region'
            )
        )
    })
}

module.exports = {delRegion}