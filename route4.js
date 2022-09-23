const express = require('express')
const router = express.Router()
const citamodel = require("./cita_model")
//read all
app.get('/', async (req, res,next) => {
    try {
        const citas = await citamodel.find({});
        res.json(citas)
    } catch (error) {
        next(error)
    }
    

});
//read by id
app.get('/:id', async (req, res,next) => {

    try {
    const id = req.params.id
    const cita = await citamodel.find({id_cita: id});
    res.json(cita)
    } catch (error) {
        next(error)
    }

});
//delete
app.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        citamodel.deleteOne({ id_cita: id })
        res.json("Eliminacion exitosa")
    } catch (error) {
        next(error)
    }


})
//crear
router.post('/', async (req,res,next) => {
    const body = req.body
    // CREACION DE DOCUMENTO SEGUN MODELO
    try {
        
        const cita = new citamodel(
            { 
            ...body
             }
            );
        await cita.save()
        res.json("Creacion exitosa")
    } catch (error) {
        next(error)
    }
    
    
})
//actualizar 
app.put('/:id', async (req, res, next) => {
    try {
        const { date, description } = req.body;
        const id = req.params.id
        citamodel.findByIdAndUpdate(id, { date: date , description: description})
        res.json("actualizacion exitosa")
        
    } catch (error) {
        next(error)
    }
})


module.exports = router;