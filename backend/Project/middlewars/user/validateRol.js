/**
 * Validar que el usario que hace la peticion sea un administrador
 */
const jwt_decode = require('jwt-decode');
const response = require('../../config/response.js')

exports.validateRol = (req, res, next) => {

    let token = req.headers.authorization.split(' ')[1];
    console.log(jwt_decode(token).role)
    if (jwt_decode(token).role == 'Admin'){
        next()
    }else{
        res.status(403).send(
            new response(
                'error',
                '403',
                'usuario no autorizado'
            )
        )
    }
}