const express = require('express')
const router = express.Router()
const clientemodel = require("./cliente_model")
//read all
app.get('/', async (req, res,next) => {
    try {
        const clientes = await clientemodel.find({});
        res.json(clientes)
    } catch (error) {
        next(error)
    }
    

});
//read by id
app.get('/:id', async (req, res,next) => {

    try {
    const id = req.params.id
    const cliente = await clientemodel.find({id_client: id});
    res.json(cliente)
    } catch (error) {
        next(error)
    }

});

//delete
app.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        clientemodel.deleteOne({ id_client: id })
        res.json("Eliminacion exitosa")
    } catch (error) {
        next(error)
    }


})


//crear
router.post('/', async (req, res, next) => {
    const body = req.body
    // CREACION DE DOCUMENTO SEGUN MODELO
    try {

        const client = new clientemodel(
            {
                ...body
            }
        );
        await client.save()
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
        clientemodel.findByIdAndUpdate(id, { name: name , age: age})
        res.json("actualizacion exitosa")
        
    } catch (error) {
        next(error)
    }
})

module.exports = router;