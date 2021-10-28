const response = require('../../config/response.js')
const {
    findUser
} = require('../../models/db_user')


exports.validateUser = (req, res, next) => {
    const user = {"name" : req.body.name}
    
    findUser(user).then(
        (user)=>{
            console.log('user', user)
            if(!user){
                next()
            }else{
                res.status(400).send(
                    new response(
                        'error',
                        '400',
                        'el usuario ya existe'
                    )
                )
                
            }
        }
    ).catch(
        (err)=>{
            res.status(500).send(
                new response(
                    'error',
                    '500',
                    'Ha ocurrido un error'
                )
            )
        }
    )
}