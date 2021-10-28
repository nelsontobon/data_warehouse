/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    createRegion
} = require('../../models/db_region')


const createNewRegion = async (req, res) => {

    createRegion(req.body).then((id)=>{
        console.log('id', id)
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Region creada correctamente'
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al crear la region'
            )
        )
    })
}

module.exports = {createNewRegion}