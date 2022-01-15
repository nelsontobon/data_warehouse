
const response = require('../../config/response.js')

const {
    getCompany
} = require('../../models/db_companies')


const getCompanies = async (req, res) => {
    // const {id, data} = req.body

    getCompany().then((data)=>{
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
                'ha ocurrido un error al consultar las compañias'
            )
        )
    })
}

module.exports = {getCompanies}