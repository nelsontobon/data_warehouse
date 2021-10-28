const {Schema,model} = require("mongoose");

const Contacts = new Schema({
    username: {
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
    company: {
        type: String,
        required: true
    },
    appointment: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});


module.exports =  model("contacts", Contacts);