/**
 * Controlador para loguear un usuario
 */

const response = require('../../config/response')
const {getToken} = require('./getToken')
const {
    findUser
} = require('../../models/db_user')

const loginUser =  (req, res) => {
    
    const {name, password} = req.body
    if (name && password ){
        findUser(req.body).then(
            (user)=>{
                console.log(user)
                if (user) {
                    const token = getToken(user._id, user.name, user.role)
                    res.status(200).send(
                        {
                            "jwt": token,
                            "role": user.role
                        }

                    );
                } else {
                    res.status(400).send(
                        new response(
                            'error',
                            '400',
                            'ha ocurrido un error al registrar el usuario'
                        )
                    )
                }
            }
        ).catch(
            (err)=>{
                res.status(400).send(
                    new response(
                        'error',
                        '400',
                        'ha ocurrido un error al registrar el usuario'
                    )
                )
            }
        )
    }else{
        res.status(500).send(
            new response(
                'error',
                '500',
                'ha ocurrido un error al registrar el usuario'
            )
        )
    }
    


};

module.exports = {loginUser}

