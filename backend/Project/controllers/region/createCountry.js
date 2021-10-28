/**
 * Controlador para crear un usuario
 */
const response = require('../../config/response.js')

const {
    createCountry
} = require('../../models/db_region')


const createNewCountry = async (req, res) => {
    const {region, data} = req.body

    createCountry(region, data).then((data)=>{
        console.log(data)
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Pais creado correctamente',
                data
            )
        )
    }).catch((err) => {
        console.error('Error de conexion:', err);
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al crear el páis'
            )
        )
    })
}

module.exports = {createNewCountry}