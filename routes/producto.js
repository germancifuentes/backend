import express from "express";
const router = express.Router();

import Producto from '../models/producto';

//Agregar un producto

router.post('/nuevo-producto', async (req, res) => {

    const body = req.body;

    try {
        const primerDB = await Producto.create(body);
        res.status(200).json(primerDB);

    } catch (error) {
        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })
    }

});

// Get con parámetros
router.get('/producto/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const primerDB = await Producto.findOne({
            _id
        });
        res.json(primerDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los documentos
router.get('/buscartodo', async (req, res) => {
    try {
        const primerDB = await Producto.find();
        res.json(primerDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Delete eliminar un producto
router.delete('/producto/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const primerDB = await Producto.findByIdAndDelete({
            _id
        });
        if (!primerDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(primerDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Put actualizar un producto
router.put('/actualizar/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const primerDB = await Producto.findByIdAndUpdate(_id,
        body,
        {new: true});
        res.json(primerDB);
        } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
        })
        }
       });

//exportamos la configuracion de express app
module.exports = router;