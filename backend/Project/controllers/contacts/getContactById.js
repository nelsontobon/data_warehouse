
const response = require('../../config/response.js')

const {
    getContactId
} = require('../../models/db_contacts')


const getContactById = async (req, res) => {
    let {id} = req.query

    getContactId(id).then((data)=>{
        console.log(data)
        res.status(200).send(
            new response(
                'ok',
                '200',
                'Consulta Exitosa',
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

module.exports = {getContactById}