const mongoose = require('mongoose')

// DEFINE SCHEMA

const CiudadSchema = mongoose.Schema({
    __id: mongoose.Schema.Types.ObjectId,
    ciudad: {
        type: String,
        required: true
    },
    pais: {
        type: String
    },
    descripcion: {
        type:String,
        required:true
    },
    hotSpot:{
        type:Number,
        default:    0}
}, {collection: "ciudad"})

// Crear el modelo

const Ciudad = mongoose.model('ciudad', CiudadSchema)




module.exports = Ciudad

