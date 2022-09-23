const express = require('express')
const router = express.Router()
const vetmodel = require("./veterinario_model")
//read all
app.get('/', async (req, res,next) => {
    try {
        const veterinarios = await vetmodel.find({});
        res.json(veterinarios)
    } catch (error) {
        next(error)
    }
    

});
//read by id
app.get('/:id', async (req, res,next) => {

    try {
    const id = req.params.id
    const veterinario = await vetmodel.find({id_vet: id});
    res.json(veterinario)
    } catch (error) {
        next(error)
    }

});
//delete
app.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        vetmodel.deleteOne({ id_vet: id })
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
        
        const vet = new vetmodel(
            { 
            ...body
             }
            );
        await vet.save()
        res.json("Creacion exitosa")
    } catch (error) {
        next(error)
    }
    
    
})
//actualizar 
app.put('/:id', async (req, res, next) => {
    try {
        const { name, age } = req.body;
        const id = req.params.id
        vetmodel.findByIdAndUpdate(id, { name: name , age: age})
        res.json("actualizacion exitosa")
        
    } catch (error) {
        next(error)
    }
})

module.exports = router;