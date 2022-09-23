const express = require('express')
const router = express.Router()
const mascotamodel = require("./mascota_model")
//read all
app.get('/', async (req, res,next) => {
    try {
        const mascotas = await mascotamodel.find({});
        res.json(mascotas)
    } catch (error) {
        next(error)
    }
    

});
//read by id
app.get('/:id', async (req, res,next) => {

    try {
    const id = req.params.id
    const mascota = await mascotamodel.find({id_mascota: id});
    res.json(mascota)
    } catch (error) {
        next(error)
    }

});
//delete
app.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        mascotamodel.deleteOne({ id_mascota: id })
        res.json("Eliminacion exitosa")
    } catch (error) {
        next(error)
    }


})
//craer
router.post('/', async (req,res,next) => {
    const body = req.body
    // CREACION DE DOCUMENTO SEGUN MODELO
    try {
        
        const mascot = new mascotamodel(
            { 
            ...body
             }
            );
        await mascot.save()
        res.json("Creacion exitosa")
    } catch (error) {
        next(error)
    }
    
    
})

//actualizar 
app.put('/:id', async (req, res, next) => {
    try {
        const { name, age, race } = req.body;
        const id = req.params.id
        mascotamodel.findByIdAndUpdate(id, { name: name , age: age, race: race})
        res.json("actualizacion exitosa")
        
    } catch (error) {
        next(error)
    }
})

module.exports = router;