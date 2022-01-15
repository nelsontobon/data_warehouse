const {Schema,model} = require("mongoose");

const Companies = new Schema({
    name: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false,
});


module.exports =  model("companies", Companies);