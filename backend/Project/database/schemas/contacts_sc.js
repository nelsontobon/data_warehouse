const {Schema,model} = require("mongoose");

const Contacts = new Schema({
    name: {
        type: String,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    position: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true
    },
    company: {
        type: String,
        required: true
    },
    region: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true
    },
    channels: {
        type: Object,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false,
});


module.exports =  model("contacts", Contacts);