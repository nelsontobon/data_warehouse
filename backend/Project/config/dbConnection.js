/**
 * Generar la conexion con la base de datos
 */

var mongoose = require('mongoose');
let url = "mongodb+srv://user-pueba:prueba1@data-warehouse.u8use.mongodb.net/data-warehouse?retryWrites=true&w=majority"

module.exports = {
    connect : async () => {
        try {
            const db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            });
            console.log("Mongodb is connected to", db.connection.host);
        } catch (error) {
            console.error(error);
        }
    }
}