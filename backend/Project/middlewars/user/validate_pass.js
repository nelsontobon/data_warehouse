const response = require('../../config/response.js')

exports.validatePass = (req, res, next) => {
    let {password, second_password} = req.body;

    if (password === second_password){
        next()
    }else {
        res.status(404).send(
            new response(
                'error',
                '404',
                `las contraseñas no son iguales`
            )
        )
    }
}