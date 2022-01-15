const {Schema,model} = require("mongoose");

const Users = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true,
        enum : ['Admin','Basico'],
    },
    password: {
        type: String,
        required: true,
        trim: true

    },
    second_password: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true,
    versionKey: false,
});


module.exports =  model("users", Users);