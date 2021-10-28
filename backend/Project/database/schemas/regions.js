const {Schema,model} = require("mongoose");

const Region = new Schema({
    region: {
        type: String,
        trim: true
    },
    country: {
        type: Object,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false,
});


module.exports =  model("region", Region);