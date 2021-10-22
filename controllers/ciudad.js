const Ciudad = require('../models/ciudad')
const mongoose = require('mongoose')


//TODO: verificar paises duplicados

/*exports.postCrearCiudad = async (req, res) =>{
    const ciudad = new Ciudad(req.body)
    ciudad._id = mongoose.Types.ObjectId()
    try{
        await ciudad.save()
        console.log(ciudad)
        console.log('Ciudad Agregada')
        res.send({operacion: "exito"})

    }catch(err){
        console.log(err)
        res.send({operacion: "error"})
    }
}*/


exports.postCrearCiudad = async (req, res) => {
    //const ciudad = new Ciudad(req.body)
    //ciudad._id = mongoose.Types.ObjectId()
        Ciudad.find(req.body, function (err, result) {
            if (result.length == 0) {
                const ciudad = new Ciudad(req.body)
                ciudad._id = mongoose.Types.ObjectId()
                try {
                    ciudad.save()
                    console.log(ciudad)
                    console.log('Ciudad Agregada')
                    res.send({ operacion: "agregado exitosamente" })

                } catch (err) {
                    console.log(err)
                    res.send({ operacion: "error" })
                }
            }
            else {

                const qCiudad = req.body.ciudad
                const qPais = req.body.pais
                const qDec = req.body.descripcion
                console.log(qCiudad, qPais, qDec)
                console.log(result)
                Ciudad.update({ciudad: req.body.ciudad, pais: req.body.pais, descripcion: req.body.descripcion}, {
                    $set: {hotSpot : result[0].hotSpot + 1 }
                }).then(()=>{
                    res.send({ operacion: "interes +1" })
                }).catch(err=>console.log(err))

                console.log('Entontre el valor, sumando al valor de interes.')


            }
        })
    }



exports.getCiudad = async (req, res) => {
    const pok = await Ciudad.find()
    console.log(pok)
    res.json(pok)
}

exports.updateCiudad = async (req, res) => {
    try {
        await Ciudad.findOneAndUpdate({}, {})
        console.log('cambio hecho')
        res.json({ operacion: "exitoso" })
    } catch (err) {
        console.log(err)
        res.send({ operacion: "error" })
    }
}

exports.deleteCiudad = async (req, res) => {
    try {
        await Ciudad.findIdAndRemove(req.body)
        console.log("ciudad borrada")
    } catch (err) {
        console.log(err)
        res.send({ operacion: "error" })
    }
}


exports.getPaises = async (req, res)=>{
    try{
        const result = await Ciudad.find(req.body)
        console.log(result)
        res.send(result)
    }catch(err){
        console.log(err)
        res.send({ operacion: "error" })
    }
}