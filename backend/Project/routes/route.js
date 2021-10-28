const user = require('../modules/user')
const region = require('../modules/region')


/**
 * instacia para generar las entidades con sus respectivos endpoint
 * @param {*} app instacia de la aplicacion creada con express
 */
module.exports = function (app) {
    app.use('/user',user)
    app.use('/',region)

}