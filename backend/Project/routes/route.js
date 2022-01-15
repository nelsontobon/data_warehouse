const user = require('../modules/user')
const region = require('../modules/region')
const companies = require('../modules/companies')
const contact = require('../modules/contacts')


/**
 * instacia para generar las entidades con sus respectivos endpoint
 * @param {*} app instacia de la aplicacion creada con express
 */
module.exports = function (app) {
    app.use('/user',user)
    app.use('/region',region)
    app.use('/companies',companies)
    app.use('/contacts',contact)
}